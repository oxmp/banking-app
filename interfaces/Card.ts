export interface CardHistory {
  action: string;
  amount: string;
  date: Date;
  currentBalance: number;
};

export interface Card {
  balance: number;
  history: CardHistory[];
};