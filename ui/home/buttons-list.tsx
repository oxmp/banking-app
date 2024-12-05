"use client";

import { useModal } from "@/hooks/useModal";

const ButtonsList = () => {
  const { openModal, setAction } = useModal();

  return (
    <nav className="lg:flex-row flex flex-col items-center justify-center gap-[30px] mt-[20px]">
      <button
        onClick={() => {
          setAction("deposit");
          openModal();
        }}
        className="py-[10px] px-[20px] bg-green-400 font-bold text-white hover:opacity-80 rounded"
      >
        Deposit
      </button>
      <button 
        onClick={() => {
          setAction("withdraw");
          openModal();
        }}
        className="py-[10px] px-[20px] bg-green-400 font-bold text-white hover:opacity-80 rounded"
      >
        Withdraw
      </button>
      <button 
        onClick={() => {
          setAction("transfer");
          openModal();
        }}
        className="py-[10px] px-[20px] bg-green-400 font-bold text-white hover:opacity-80 rounded"
      >
        Transfer
      </button>
    </nav>
  );
}
 
export default ButtonsList;