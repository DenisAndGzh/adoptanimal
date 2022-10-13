import { defineStore } from "pinia";

export const useMessageStore = defineStore("message", {
  state: () => {
    return { name: "" as string, email: "" as string, text: "" as string };
  },
  getters: {},
  actions: {},
});
