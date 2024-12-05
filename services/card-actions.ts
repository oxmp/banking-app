import { Card } from "@/interfaces/Card";

export const deposit = (amount: number, card: Card): Card => {
  if (amount <= 0) {
    throw new Error("Amount must be greater than 0.");
  }

  localStorage.setItem("card", JSON.stringify({ ...card, balance: card.balance + amount, history: [...card.history, { action: "deposit", amount: `+${amount}`, date: new Date(), currentBalance: card.balance + amount }] }));
  
  return { ...card, balance: card.balance + amount, history: [...card.history, { action: "deposit", amount: `+${amount}`, date: new Date(), currentBalance: card.balance + amount }] };
};

export const withdraw = (amount: number, card: Card): Card => {
  if (amount <= 0) {
    throw new Error("Amount must be greater than 0.");
  }

  if (amount > card.balance) {
    throw new Error("Amount must be less than balance.");
  }

  localStorage.setItem("card", JSON.stringify({ ...card, balance: card.balance - amount, history: [...card.history, { action: "withdraw", amount: `-${amount}` , date: new Date(), currentBalance: card.balance - amount }] }));

  return { ...card, balance: card.balance - amount, history: [...card.history, { action: "withdraw", amount: `-${amount}` , date: new Date(), currentBalance: card.balance - amount }] };
}

export const isValidIBAN = (iban: string) => {
  const ibanRegex = /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/;
  return ibanRegex.test(iban);
}

export const transfer = (amount: number, card: Card, receiverIBAN: string): Card => {
  if (!isValidIBAN(receiverIBAN)) {
    throw new Error("Invalid IBAN.");
  }
  if (amount <= 0) {
    throw new Error("Amount must be greater than 0.");
  }
  if (amount > card.balance) {
    throw new Error("Insufficient funds.");
  }

  localStorage.setItem("card", JSON.stringify({ ...card, balance: card.balance - amount, history: [...card.history, { action: "transfer", amount: `${amount} to ${receiverIBAN}`, date: new Date(), currentBalance: card.balance - amount }] }));

  return { ...card, balance: card.balance - amount, history: [...card.history, { action: "transfer", amount: `${amount} to ${receiverIBAN}`, date: new Date(), currentBalance: card.balance - amount }] };
}
