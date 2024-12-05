"use client";

import { Card } from "@/interfaces/Card";
import { CardContextType } from "@/interfaces/card-contex";
import { createContext, useContext, useEffect, useState } from "react";

const CardContext = createContext<CardContextType | undefined>(undefined);

export const useCard = (): CardContextType => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCard must be used within a CardProvider');
  }
  return context;
};

export const CardProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [card, setCard] = useState<Card>({
    balance: 0,
    history: []
  });

  useEffect(() => {
    const storedCard = localStorage.getItem("card");
    if (storedCard) {
      setCard(JSON.parse(storedCard));
    }
  }, []);

  return (
    <CardContext.Provider value={{ card, setCard }}>
      {children}
    </CardContext.Provider>
  );
};