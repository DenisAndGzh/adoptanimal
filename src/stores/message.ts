import { defineStore } from "pinia";

export const useMessageStore = defineStore("message", {
  state: () => {
    return { name: "" as string, email: "" as string, message: "" as string };
  },
  getters: {},
  actions: {},
});
