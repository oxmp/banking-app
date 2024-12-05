export interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  action: string;
  setAction: (action: string) => void;
}