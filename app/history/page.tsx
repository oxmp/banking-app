"use client";

import { useCard } from "@/hooks/useCard";
import { CardHistory } from "@/interfaces/Card";
import React from "react";

const Page = () => {
  const { card } = useCard();

  const filteredHistory = card.history
  .sort((a: CardHistory, b: CardHistory) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <h2 className="text-2xl font-bold text-center py-4 bg-black text-white">
          Transaction History
        </h2>
        <ul>
          {filteredHistory.length > 0 ? (
            filteredHistory.map((item, index) => (
              <li
                key={index}
                className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-b hover:bg-gray-50 transition-all"
              >
                <div className="flex items-start md:items-center gap-4">
                  <div
                    className={`w-10 h-10 flex justify-center items-center rounded-full text-white ${
                      item.action === "deposit"
                        ? "bg-green-500"
                        : item.action === "withdraw"
                        ? "bg-red-500"
                        : "bg-blue-500"
                    }`}
                  >
                    {item.action === "deposit" ? "+" : "-"}
                  </div>
                  <div>
                    <p className="font-medium">{item.action.toUpperCase()}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(item.date).toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <p
                    className={`font-semibold ${
                      item.amount.startsWith("+")
                        ? "text-green-600"
                        : item.amount.startsWith("-")
                        ? "text-red-600"
                        : "text-gray-600"
                    }`}
                  >
                    Amount: {item.amount}
                  </p>
                  <p className="text-sm text-gray-500">Balance: {item.currentBalance}</p>
                </div>
              </li>
            ))
          ) : (
            <li className="p-4 text-center">No transactions yet.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Page;