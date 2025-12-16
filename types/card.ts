export type CardType =
  | "swap"
  | "x2"
  | "x3"
  | "+50"
  | "+100"
  | "+150"
  | "-50"
  | "-100"
  | "-150"
  | "loseAll"
  | "steal20"
  | "steal50";

export interface CardConfig {
  type: CardType;
  weight: number;
  desc: string;
}

/**
 * Pool bài – dùng cho random theo weight
 */
export const CARD_POOL: CardConfig[] = [
  { type: "+50", weight: 30, desc: "Cộng thêm 50 điểm." },
  { type: "+100", weight: 20, desc: "Cộng thêm 100 điểm." },
  { type: "+150", weight: 10, desc: "Cộng thêm 150 điểm." },

  { type: "-50", weight: 15, desc: "Trừ 50 điểm." },
  { type: "-100", weight: 8, desc: "Trừ 100 điểm." },
  { type: "-150", weight: 4, desc: "Trừ 150 điểm." },

  { type: "x2", weight: 15, desc: "Nhân đôi điểm vừa nhận." },
  { type: "x3", weight: 4, desc: "Nhân ba điểm vừa nhận." },

  {
    type: "steal20",
    weight: 8,
    desc: "Cướp 20% tổng điểm của một người chơi khác.",
  },
  {
    type: "steal50",
    weight: 2,
    desc: "Cướp 50% tổng điểm của một người chơi khác.",
  },

  {
    type: "swap",
    weight: 5,
    desc: "Hoán đổi toàn bộ điểm với một người chơi khác.",
  },

  {
    type: "loseAll",
    weight: 1,
    desc: "Mất toàn bộ điểm hiện tại.",
  },
];
