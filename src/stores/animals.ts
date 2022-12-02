import { defineStore } from "pinia";
import axios from "axios";

export const useAnimalsStore = defineStore("animals", {
  state: () => {
    return {
      id: [] as string[],
      name: [] as string[],
      type: [] as string[],
      description: [] as string[],
    };
  },
  getters: {},
  actions: {
    async init() {
      let arr;
      try {
        arr = axios.get("https://localhost/api/animal/random");
      } catch (e) {
        console.error(e);
        alert("Fail to get random animals");
      }
      for (let i = 0; i < 6; i++) {
        this.id.push((await arr)?.data[i]["id"]);
        this.name.push((await arr)?.data[i]["id"]);
        this.type.push((await arr)?.data[i]["id"]);
        this.description.push((await arr)?.data[i]["id"]);
      }
    },
  },
});
