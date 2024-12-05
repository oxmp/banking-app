import { useCard } from "@/hooks/useCard";
import { deposit } from "@/services/card-actions";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Deposit = () => {
  const { setCard, card } = useCard();
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState<string>("");

  return (
    <main className="w-full pt-[50px] flex flex-col gap-[10px] items-center justify-center">
      <input 
        type="number" 
        placeholder="Amount..."
        className="p-[10px] border rounded"
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <button
        className="py-[10px] px-[20px] bg-blue-400 font-bold text-white hover:opacity-80 rounded cursor-pointer"
        onClick={() => {          
          try {
            setCard(deposit(amount, card));
            setError("");
            toast.success("Deposited successfully!");
          } catch (error: any) {
            setError(error.message);
            toast.error(error.message);
          }
        }}
      >
        Deposit
      </button>

      {error && <p className="text-red-500">{error}</p>}
    </main>
  );
}
 
export default Deposit;