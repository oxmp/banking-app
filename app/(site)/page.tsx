"use client";

import { useModal } from "@/hooks/useModal";
import ButtonsList from "@/ui/home/buttons-list";
import Card from "@/ui/home/card";
import Modal from "@/ui/home/modal";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const { isOpen } = useModal(); 
  
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center py-[20px]">
      <Toaster />
      <Card />

      <h1 className="mt-[20px] font-bold">Actions:</h1>
      <ButtonsList />

      {isOpen && <Modal />}
    </div>
  );
}
