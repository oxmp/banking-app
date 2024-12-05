"use client";

import { ModalContextType } from "@/interfaces/modal-context";
import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export const ModalProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState("");
  
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, action, setAction }}>
      {children}
    </ModalContext.Provider>
  );
};
