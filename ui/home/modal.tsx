import { useModal } from "@/hooks/useModal";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import { useCard } from "@/hooks/useCard";
import Transfer from "./transfer";

const Modal = () => {
  const { action, closeModal } = useModal();
  const { card } = useCard();

  return (
    <div className="min-w-[300px] min-h-[370px] lg:min-w-[400px] bg-white lg:min-h-[400px] absolute border shadow-2xl">
      <div className="flex justify-between items-center p-[20px]">
        <h1 className="font-bold">Balance: {card.balance}</h1>
        <button 
          className="mx-0 my-auto px-[20px] py-[10px] bg-red-500 text-white hover:opacity-80 rounded cursor-pointer"
          onClick={closeModal}
        >Close</button>
      </div>

      {action === "deposit" && <Deposit />}
      {action === "withdraw" && <Withdraw />}
      {action === "transfer" && <Transfer />}
    </div>
  );
}
 
export default Modal;