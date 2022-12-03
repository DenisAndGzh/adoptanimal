<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8">
      <h3 style="padding: 10px 0 15px" class="text-primary text-center q-my-md">
        My name is {{ pet["name"] }}!
      </h3>
    </div>
    <div class="col-2"></div>
  </div>
  <div class="row" style="padding: 10px 0 0 20px">
    <div class="col-2"></div>
    <div class="col-4 text-center">
      <q-img loading="lazy" :src="pet['url']" height="420px" width="420px" />

      <div class="row" style="padding: 30px 0 0 0">
        <div class="col-1"></div>
        <div class="col-5">
          <q-btn
            type="a"
            @click="click_addfavorite"
            size="lg"
            label="Add Favorite"
            color="red-9"
          />
        </div>
        <div class="col-5">
          <q-btn
            type="a"
            to="/favorite"
            size="lg"
            label="Go To Favorite"
            color="grey"
          />
        </div>
        <div class="col-1"></div>
      </div>
    </div>
    <div class="col-4" style="padding: 0 0 40px">
      <div class="text-h4 text-primary info">Age: {{ pet["age"] }}</div>
      <div class="text-h4 text-primary info">Sex: {{ pet["sex"] }}</div>
      <div class="text-h4 text-primary info">
        Weight: {{ pet["weight"] }} KG
      </div>
      <div class="text-h4 text-primary info">Breed: {{ pet["breed"] }}</div>
      <div class="text-h4 text-primary info">City: {{ pet["city"] }}</div>
      <div class="text-h4 text-primary info">Color: {{ pet["color"] }}</div>
      <div class="text-h4 text-primary info">Description:</div>
      <div class="text-h4 text-primary info" style="padding: 0 20px 0">
        {{ pet["description"] }}
      </div>
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script setup lang="ts">
import { useAnimalsStore } from "@/stores/animals";
import { useFavoriteStore } from "@/stores/favorites";
const route = useRoute();
const Animals = useAnimalsStore();
const Favorites = useFavoriteStore();
const id = route.query.id;

async function getPetInfo() {
  let pet;
  await Animals.getAnimalById(id as string).then((d) => {
    pet = d;
  });
  return pet;
}

const click_addfavorite = () => {
  Favorites.addFavorite(pet["id"]);
  console.log(Favorites.id);
};
interface pet_interface {
  id: string;
  name: string;
  type: string;
  age: number;
  sex: string;
  weight: string;
  breed: string;
  color: string;
  city: string;
  description: string;
  url: string;
}

const pet = reactive((await getPetInfo())! as pet_interface);

console.log(pet);
</script>

<style lang="scss" scoped>
.info {
  line-height: 45px;
}
</style>
