"use client";

import { useState, useEffect } from "react";
import GameCard from "./game-card";
import { CardType } from "@/types/card";
import { calculateScore } from "@/utils/calculateScore";
import { applyCardEffect } from "@/utils/applyCardEffect";
import { getPlayerScore, onLeaderboardUpdate, onPlayerScoreUpdate, stealScore, swapScore, updateScore } from "@/utils/firebase";
import { randomCards } from "@/utils/randomCards";
import { QUESTIONS_DATA } from "@/data/question";

type Phase = "question" | "card" | "popup" | "selectPlayer";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface Player {
  id: string;
  name: string;
  score: number;
}

function shuffle<T>(arr: T[]): T[] {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export default function GamePlay({roomCode, playerId}: {roomCode: string; playerId: string}) {
  const [phase, setPhase] = useState<Phase>("question");
  const [score, setScore] = useState(0);

  const [questions, setQuestions] = useState<Question[]>(shuffle(QUESTIONS_DATA));
  const [currentIdx, setCurrentIdx] = useState(0);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(15);

  const CARD_COUNT = 3;
  const MAX_FLIP = 2;
  const [currentSet, setCurrentSet] = useState<Question[]>([]);
  const [cardOptions, setCardOptions] = useState<CardType[]>([]);
  const [cardsFlipped, setCardsFlipped] = useState<boolean[]>([]);
  const [cardFlipsLeft, setCardFlipsLeft] = useState(MAX_FLIP);
  const [isCardProcessing, setIsCardProcessing] = useState(false);

  // State cho cướp điểm
  const [pendingStealCard, setPendingStealCard] = useState<CardType | null>(null);
  const [allPlayers, setAllPlayers] = useState<Player[]>([]);
  useEffect(() => {
    setCurrentSet(shuffle(QUESTIONS_DATA));
  }, []);
  // Timer
  useEffect(() => {
    if (phase !== "question" || selectedOption) return;

    if (timeLeft <= 0) {
      setSelectedOption("");
      setTimeout(nextQuestion, 800);
      return;
    }

    const timer = setTimeout(() => setTimeLeft((v) => v - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, phase, selectedOption]);

  // Lắng nghe điểm của player hiện tại
  useEffect(() => {
    if (!roomCode || !playerId) return;
  
    const unsubscribe = onPlayerScoreUpdate(
      roomCode,
      playerId,
      (newScore) => {
        setScore(newScore);
      }
    );
  
    return () => unsubscribe();
  }, [roomCode, playerId]);

  // Lắng nghe danh sách tất cả người chơi (realtime)
  useEffect(() => {
    if (!roomCode) return;

    const unsubscribe = onLeaderboardUpdate(roomCode, (leaderboard) => {
      const players = leaderboard.map((p, idx) => ({
        id: p.id,
        name: p.name,
        score: p.score,
      }));
      setAllPlayers(players);
    });

    return () => unsubscribe();
  }, [roomCode]);

  const handleAnswer = (option: string) => {
    if (selectedOption) return;

    setSelectedOption(option);
    const isCorrect = option === currentQuestion.answer;

    if (!isCorrect) {
      setTimeout(nextQuestion, 1200);
      return;
    }

    // Correct answer - add score
    const baseScore = 100;
    const timeBonus = timeLeft * 5;
    const gained = baseScore + timeBonus;
    updateScore(roomCode, playerId, gained);

    // Reset card state for new question
    setCardFlipsLeft(MAX_FLIP);

    // Show popup
    setTimeout(() => {
      setPhase("popup");
    }, 800);
  };

  const handlePickCard = () => {
    // Generate new cards each time
    setCardOptions(randomCards(CARD_COUNT));
    setCardsFlipped(Array(CARD_COUNT).fill(false));
    setPhase("card");
  };

  const handleCardClick = (idx: number) => {
    if (
      isCardProcessing || 
      cardsFlipped[idx] || 
      cardFlipsLeft <= 0
    ) return;
  
    setIsCardProcessing(true);
  
    setCardsFlipped((prev) =>
      prev.map((v, i) => (i === idx ? true : v))
    );
  
    const card = cardOptions[idx];
  
    setTimeout(() => {
      // Kiểm tra nếu là bài cướp điểm hoặc swap
      if (card === "steal20" || card === "steal50" || card === "swap") {
        setPendingStealCard(card);
        setPhase("selectPlayer");
        setIsCardProcessing(false);
      } else {
        // Áp dụng hiệu ứng bình thường
        applyCardEffect({
          roomCode,
          playerId,
          card,
        });
  
        setCardFlipsLeft((prev) => {
          const remaining = prev - 1;
  
          if (remaining > 0) {
            setTimeout(() => {
              setPhase("popup");
              setIsCardProcessing(false);
            }, 800);
          } else {
            setTimeout(() => {
              nextQuestion();
              setIsCardProcessing(false);
            }, 1200);
          }
  
          return remaining;
        });
      }
    }, 500);
  };

  const handleSelectPlayer = async (targetPlayerId: string) => {
    if (!pendingStealCard) return;

    // Áp dụng hiệu ứng cướp điểm
    if (pendingStealCard === "steal20") {
      await stealScore(roomCode, playerId, targetPlayerId, "STEAL_20");
    } else if (pendingStealCard === "steal50") {
      await stealScore(roomCode, playerId, targetPlayerId, "STEAL_50");
    } else if (pendingStealCard === "swap") {
      await swapScore(roomCode, playerId, targetPlayerId);
    }

    setPendingStealCard(null);

    // Tiếp tục game
    setCardFlipsLeft((prev) => {
      const remaining = prev - 1;

      if (remaining > 0) {
        setPhase("popup");
      } else {
        setTimeout(() => {
          nextQuestion();
        }, 800);
      }

      return remaining;
    });
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setTimeLeft(15);
    setCardFlipsLeft(MAX_FLIP);
    setPhase("question");

    // Nếu còn câu trong set hiện tại
    if (currentIdx + 1 < currentSet.length) {
      setCurrentIdx(prev => prev + 1);
    } else {
      // Hết set -> tạo set mới và reset index
      console.log("Hết set câu hỏi, tạo set mới...");
      setCurrentSet(shuffle(QUESTIONS_DATA));
      setCurrentIdx(0);
    }
  };

  const currentQuestion = questions[currentIdx];

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Đang tải câu hỏi...</p>
      </div>
    );
  }

  // Lấy danh sách người chơi khác (không bao gồm mình)
  const otherPlayers = allPlayers.filter(p => p.id !== playerId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-6">
      <div className="mx-auto max-w-2xl space-y-6 text-center">
        <div className="bg-white rounded-xl shadow-lg p-4">
          <p className="text-2xl font-bold text-indigo-600">Điểm: {score}</p>
        </div>

        {/* Question Phase */}
        {phase === "question" && currentQuestion && (
          <div className="p-6 border rounded-xl bg-white shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{currentQuestion.question}</h2>
            <p className="text-sm text-gray-500 mb-4">Thời gian còn lại: {timeLeft}s</p>

            <div className="grid grid-cols-2 gap-4">
              {currentQuestion.options.map((opt) => {
                const isCorrect = opt === currentQuestion.answer;
                let style = "bg-gray-100 hover:bg-gray-200";

                if (selectedOption) {
                  if (opt === selectedOption) {
                    style = isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white";
                  } else if (isCorrect) {
                    style = "bg-green-500 text-white";
                  }
                }

                return (
                  <button
                    key={opt}
                    className={`p-3 rounded font-medium transition-all ${style}`}
                    onClick={() => handleAnswer(opt)}
                    disabled={!!selectedOption}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Popup Phase */}
        {phase === "popup" && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 animate-scale-in">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">🎉 Trả lời đúng!</h2>
              <p className="text-gray-700 mb-6">
                {cardFlipsLeft === MAX_FLIP 
                  ? "Bạn có muốn bóc bài để nhận thưởng thêm?"
                  : `Bạn còn ${cardFlipsLeft} lượt bóc. Tiếp tục?`}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={handlePickCard}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
                >
                  🎴 Bóc bài
                </button>
                <button
                  onClick={nextQuestion}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-lg transition-all"
                >
                  ➡️ Câu kế tiếp
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Card Phase */}
        {phase === "card" && (
          <div className="space-y-4 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-indigo-600">🎴 Chọn bài để bóc</h2>

            <div className="flex justify-center gap-6">
              {cardOptions.map((type, idx) => (
                <GameCard 
                  key={idx} 
                  type={type} 
                  flipped={cardsFlipped[idx]} 
                  onClick={() => handleCardClick(idx)} 
                />
              ))}
            </div>

            <p className="text-sm text-gray-500">Lượt lật còn lại: {cardFlipsLeft}</p>
          </div>
        )}

        {/* Select Player Phase */}
        {phase === "selectPlayer" && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg mx-4 animate-scale-in max-h-[80vh] overflow-y-auto">
              <h2 className="text-2xl font-bold text-indigo-600 mb-2">
                {pendingStealCard === "steal20" && "🦹 Cướp 20% điểm"}
                {pendingStealCard === "steal50" && "🦹‍♂️ Cướp 50% điểm"}
                {pendingStealCard === "swap" && "🔄 Hoán đổi điểm"}
              </h2>
              <p className="text-gray-600 mb-6">Chọn người chơi để thực hiện:</p>

              {otherPlayers.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">Không có người chơi khác trong phòng</p>
                  <button
                    onClick={() => {
                      setPendingStealCard(null);
                      setCardFlipsLeft((prev) => {
                        const remaining = prev - 1;
                        if (remaining > 0) {
                          setPhase("popup");
                        } else {
                          nextQuestion();
                        }
                        return remaining;
                      });
                    }}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-lg transition-all"
                  >
                    Tiếp tục
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {otherPlayers.map((player) => (
                    <button
                      key={player.id}
                      onClick={() => handleSelectPlayer(player.id)}
                      className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-lg transition-all flex items-center justify-between"
                    >
                      <span className="text-lg">{player.name}</span>
                      <span className="text-xl">💰 {player.score}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes scale-in {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
