<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8">
      <h3 style="padding: 10px 0 15px" class="text-primary text-center q-my-md">
        Favorite Pets
      </h3>
    </div>
    <div class="col-2"></div>
  </div>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8">
      <div
        v-if="Favorites.index.length === 0"
        class="text-primary text-h4 text-center"
        style="padding: 60px"
      >
        Your favorite pets is empty!<br />
        Please add some pets.
      </div>
      <div v-else>
        <q-markup-table>
          <thead>
            <tr>
              <th class="text-left">ID</th>
              <th class="text-center">Name</th>
              <th class="text-center">Age</th>
              <th class="text-center">Type</th>
              <th class="text-center">Breed</th>
              <th class="text-center">Color</th>
              <th class="text-center">Info</th>
              <th class="text-center">Delect</th>
            </tr>
          </thead>
          <tbody v-for="index in Favorites.index" :key="index">
            <tr>
              <td class="text-left">{{ Favorites.id[index] }}</td>
              <td class="text-center">{{ Favorites.name[index] }}</td>
              <td class="text-center">{{ Favorites.age[index] }}</td>
              <td class="text-center">{{ Favorites.type[index] }}</td>
              <td class="text-center">{{ Favorites.breed[index] }}</td>
              <td class="text-center">{{ Favorites.color[index] }}</td>
              <td class="text-center">
                <q-btn
                  outline
                  color="primary"
                  label="More Info"
                  :to="{ path: '/petinfo', query: { id: Favorites.id[index] } }"
                />
              </td>
              <td class="text-center">
                <q-btn
                  outline
                  color="red-9"
                  label="Delect"
                  @click="click_delect(index)"
                />
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </div>
    <div class="col-2"></div>
  </div>
  <div v-if="Favorites.index.length !== 0">
    <MessageTable></MessageTable>
  </div>
</template>

<script setup lang="ts">
import { useFavoriteStore } from "@/stores/favorites";
import MessageTable from "../components/MessageTable.vue";
const Favorites = useFavoriteStore();
const click_delect = (index: number) => {
  Favorites.delect(index);
};
</script>

<style lang="scss" scoped></style>
