<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8">
      <h3 style="padding: 10px 0 15px" class="text-primary text-center q-my-md">
        Search Result
      </h3>
    </div>
    <div class="col-2"></div>
  </div>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8">
      <div
        v-if="Search.search.length === 0"
        class="text-primary text-h4 text-center"
        style="padding: 60px"
      >
        Your Search result is empty!<br />
        Please search some else.
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
              <th class="text-center">Favorite</th>
            </tr>
          </thead>
          <tbody v-for="item in Search.search" :key="item">
            <tr>
              <td class="text-left">{{ item["id"] }}</td>
              <td class="text-center">{{ item["name"] }}</td>
              <td class="text-center">{{ item["age"] }}</td>
              <td class="text-center">{{ item["type"] }}</td>
              <td class="text-center">{{ item["breed"] }}</td>
              <td class="text-center">{{ item["color"] }}</td>
              <td class="text-center">
                <q-btn
                  outline
                  color="primary"
                  label="More Info"
                  @click="click_info(item['id'])"
                />
              </td>
              <td class="text-center">
                <q-btn
                  outline
                  color="red-9"
                  label="Add Favorite"
                  @click="click_addfavorite(item['id'])"
                />
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script setup lang="ts">
import { useSearchStore } from "@/stores/search";
import { useFavoriteStore } from "@/stores/favorites";
const Favorites = useFavoriteStore();
const Search = useSearchStore();
const router = useRouter();
const click_info = async (id: string) => {
  router.push({ path: "/petinfo", query: { id: id } });
};
const click_addfavorite = (id: string) => {
  Favorites.addFavorite(id);
  console.log(Favorites.id);
};
</script>

<style lang="scss" scoped></style>
