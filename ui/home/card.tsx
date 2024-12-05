"use client";

import { useCard } from "@/hooks/useCard";

const Card = () => {
  const { card } = useCard();

  return (
    <div className="min-w-[200px] lg:min-w-[300px]">
      <div className="w-full bg-black p-[20px] rounded-lg shadow-md">
        <h1 className="text-xl text-white text-center font-bold">Card</h1>
        <p className="text-lg text-white text-center font-semibold mt-[10px]">Balance: {card.balance}</p>
      </div>
    </div>
  );
}
 
export default Card;