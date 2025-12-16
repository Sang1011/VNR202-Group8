import { firebaseApp } from "@/config/firebaseConfig"
import { getDatabase, ref, set, update, get, onValue, remove } from "firebase/database"

const db = getDatabase(firebaseApp)
// Random 6 ký tự
export const generateRoomCode = (): string => {
    return Math.random().toString(36).substring(2, 8).toUpperCase()
  }
  
  // Random playerId
  export const generatePlayerId = (): string => {
    return crypto.randomUUID()
  }

  export const onPlayerScoreUpdate = (
    roomCode: string,
    playerId: string,
    callback: (score: number) => void
  ) => {
    const scoreRef = ref(db, `rooms/${roomCode}/players/${playerId}/score`);
  
    const unsubscribe = onValue(scoreRef, (snap) => {
      callback(snap.val() || 0);
    });
  
    return unsubscribe;
  };

  export const endGame = async (roomCode: string) => {
    await update(ref(db, `rooms/${roomCode}`), {
      status: "endGame",
      gameStarted: false,
      gameEnded: true,
    });
  };

  export const getRoomStatus = async (roomCode: string): Promise<{ status: "open" | "closed"; gameStarted?: boolean } | null> => {
    const roomRef = ref(db, `rooms/${roomCode}`);
    const snap = await get(roomRef);
    if (!snap.exists()) return null;
    return { status: snap.val().status, gameStarted: snap.val().gameStarted || false };
  };
  
  // Realtime listener cho trạng thái phòng
  export const onRoomStatusUpdate = (
    roomCode: string,
    callback: (status: { status: string; gameStarted: boolean }) => void
  ) => {
    const roomRef = ref(db, `rooms/${roomCode}`);
    const unsubscribe = onValue(roomRef, (snap) => {
      const room = snap.val();
      callback({ status: room?.status || "closed", gameStarted: room?.gameStarted || false });
    });
  
    return unsubscribe; // ✅ trả về function
  };
  
  // --- 2.1 Tạo phòng ---
  export const createRoom = async () => {
    const roomCode = generateRoomCode();
    const adminKey = generatePlayerId();
    await set(ref(db, `rooms/${roomCode}`), {
      adminKey,
      status: "open",
      gameStarted: false,
      createdAt: Date.now(),
      players: {}
    });
    return { roomCode, adminKey };
  };
  
  export const startGame = async (roomCode: string) => {
    await update(ref(db, `rooms/${roomCode}`), { gameStarted: true });
  };
  
  // --- 2.2 Tham gia phòng ---
  export const joinRoom = async (roomCode: string, playerName: string) => {
    const playerId = generatePlayerId()
    await set(ref(db, `rooms/${roomCode}/players/${playerId}`), {
      name: playerName,
      score: 0,
      joinedAt: Date.now()
    })
    return playerId
  }
  
  // --- 2.3 Kết thúc phòng (admin) ---
  export const closeRoom = async (roomCode: string) => {
    await update(ref(db, `rooms/${roomCode}`), {
      status: "closed"
    })
  }
  
  // --- 2.4 Update điểm ---
  // cộng/trừ điểm
  export const updateScore = async (
    roomCode: string,
    playerId: string,
    delta: number
  ) => {
    const playerRef = ref(db, `rooms/${roomCode}/players/${playerId}`)
    const snap = await get(playerRef)
    if (!snap.exists()) return
    const currentScore = snap.val().score || 0
    await update(playerRef, { score: Math.max(0, currentScore + delta) })
  }
  
  export const multiplyScore = async (
    roomCode: string,
    playerId: string,
    factor: number = 2
  ) => {
    const playerRef = ref(db, `rooms/${roomCode}/players/${playerId}`)
    const snap = await get(playerRef)
    if (!snap.exists()) return
    const currentScore = snap.val().score || 0
    await update(playerRef, { score: currentScore * factor })
  }
  
  // mất toàn bộ điểm
  export const resetScore = async (roomCode: string, playerId: string) => {
    await update(ref(db, `rooms/${roomCode}/players/${playerId}`), { score: 0 })
  }
  
  type StealType = "STEAL_20" | "STEAL_50"

  export const stealScore = async (
    roomCode: string,
    thiefId: string,
    victimId: string,
    type: StealType
  ) => {
    const playersRef = ref(db, `rooms/${roomCode}/players`)
    const snap = await get(playersRef)
    if (!snap.exists()) return
  
    const players = snap.val()
    if (!players[thiefId] || !players[victimId]) return
  
    const victimScore = players[victimId].score || 0
    if (victimScore <= 0) return
  
    const percent = type === "STEAL_20" ? 0.2 : 0.5
    const stolen = Math.floor(victimScore * percent)
  
    players[thiefId].score += stolen
    players[victimId].score -= stolen
  
    await update(playersRef, {
      [thiefId]: players[thiefId],
      [victimId]: players[victimId],
    })
  }

  export const swapScore = async (
    roomCode: string,
    playerAId: string,
    playerBId: string
  ) => {
    const playersRef = ref(db, `rooms/${roomCode}/players`)
    const snap = await get(playersRef)
    if (!snap.exists()) return
  
    const players = snap.val()
    if (!players[playerAId] || !players[playerBId]) return
  
    // hoán đổi điểm
    const tempScore = players[playerAId].score || 0
    players[playerAId].score = players[playerBId].score || 0
    players[playerBId].score = tempScore
  
    await update(playersRef, {
      [playerAId]: players[playerAId],
      [playerBId]: players[playerBId],
    })
  }
  
  // --- 2.5 Lắng nghe realtime leaderboard (admin) ---
  export const onLeaderboardUpdate = (
    roomCode: string,
    callback: (players: { id: string; name: string; score: number }[]) => void
  ) => {
    const roomRef = ref(db, `rooms/${roomCode}/players`);
    const unsubscribe = onValue(roomRef, (snap) => {
      const players = snap.val() || {};
      const leaderboard = Object.entries(players)
        .map(([id, p]: [string, any]) => ({ 
          id,
          name: p.name, 
          score: p.score 
        }))
        .sort((a, b) => b.score - a.score);
      callback(leaderboard);
    });
  
    return unsubscribe;
  };
  

  export const getPlayerScore = async (
    roomCode: string,
    playerId: string
  ): Promise<number | null> => {
    const playerRef = ref(db, `rooms/${roomCode}/players/${playerId}`)
    const snap = await get(playerRef)
    if (!snap.exists()) return null
    return snap.val().score || 0
  }