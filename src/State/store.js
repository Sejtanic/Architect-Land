import create from "zustand";
import { devtools } from "zustand/middleware";

export const mainStore = create(
  devtools((set) => ({
    sliderPosition: 0,
    setSliderPosition: (sliderPosition) => {
      set((store) => ({ ...store, sliderPosition }));
    },
  }))
);
