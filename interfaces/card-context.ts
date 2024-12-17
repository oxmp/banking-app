import { Card } from "./Card";

export interface CardContextType {
  card: Card;
  setCard: (card: Card) => void;
}