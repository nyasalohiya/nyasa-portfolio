import { create } from 'zustand';

interface TransitionState {
  isTransitioning: boolean;
  targetPath: string | null;
  startTransition: (path: string) => void;
  endTransition: () => void;
}

export const useTransitionStore = create<TransitionState>((set) => ({
  isTransitioning: false,
  targetPath: null,
  startTransition: (path) => set({ isTransitioning: true, targetPath: path }),
  endTransition: () => set({ isTransitioning: false, targetPath: null }),
}));
