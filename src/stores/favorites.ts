import { defineStore } from "pinia";
import { Notify } from "quasar";
import axios from "axios";

export const useFavoriteStore = defineStore("favorites", {
  state: () => {
    return {
      id: [] as string[],
      name: [] as string[],
      age: [] as string[],
      type: [] as string[],
      breed: [] as string[],
      color: [] as string[],
      index: [] as number[],
      count: 0,
    };
  },
  getters: {},
  actions: {
    async addFavorite(id: string) {
      if (this.id.includes(id) === false) {
        this.id.push(id);
        let pet = null;
        try {
          pet = (await axios.get("https://47.92.133.39/api/animal/" + id)).data;
        } catch (e) {
          console.error(e);
        }
        console.log(pet);
        this.name.push(pet["name"]);
        this.age.push(pet["age"]);
        this.type.push(pet["type"]);
        this.breed.push(pet["breed"]);
        this.color.push(pet["color"]);
        this.index.push(this.count);
        this.count++;
        Notify.create({
          position: "top",
          message: "Add Favorite Pet Successful!",
          color: "green",
        });
      } else {
        Notify.create({
          position: "top",
          message: "This Pet Already Exist!",
          color: "red",
        });
      }
    },
    delect(id: number) {
      this.id.splice(id, 1);
      this.name.splice(id, 1);
      this.age.splice(id, 1);
      this.type.splice(id, 1);
      this.breed.splice(id, 1);
      this.color.splice(id, 1);
      this.index.pop();
      this.count = this.count - 1;
      Notify.create({
        position: "top",
        message: "Delect Successful!",
        color: "red",
      });
    },
  },
});
