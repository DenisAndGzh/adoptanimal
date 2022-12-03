import { defineStore } from "pinia";

export const useAnimalsStore = defineStore("animals", {
  state: () => {
    return {
      id: [] as string[],
      count: 0,
    };
  },
  getters: {},
  actions: {},
});
