import { create } from "zustand";

const useCategoriesStore = create((set) => ({
  searchTerm: "",
  sortType: "a-z",
  setSearchTerm: (term) => set({ searchTerm: term }),
  setSortType: (type) => set({ sortType: type }),
}));

export default useCategoriesStore;
