import { create } from "zustand";

interface AuthModalStore {
  isOpen: boolean;
  isSignUp: boolean;
  onOpenSignIn: () => void;
  onOpenSignUp: () => void;
  onClose: () => void;
}

const useAuthModal = create<AuthModalStore>((set) => ({
  isOpen: false,
  isSignUp: true,
  onOpenSignIn: () => set({ isOpen: true, isSignUp: false }),
  onOpenSignUp: () => set({ isOpen: true, isSignUp: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAuthModal;
