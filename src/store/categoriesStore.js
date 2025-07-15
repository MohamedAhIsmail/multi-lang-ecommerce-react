import { create } from "zustand";

const useCategoriesStore = create((set) => ({
  searchTerm: "",
  setSearchTerm: (value) => set({ searchTerm: value }),
}));

export default useCategoriesStore;
