import { shallowMount } from "@vue/test-utils";
import { expect, test } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useFavoriteStore } from "@/stores/favorites";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import Favorite from "../src/views/FavoriteView.vue";

const pinia = createPinia().use(piniaPluginPersistedstate);

test("test_favorite_store", async () => {
  setActivePinia(pinia);
  const favorite = useFavoriteStore();
  await favorite.addFavorite("1");
  expect(favorite.name[0]).toBe("Mickey");
  expect(favorite.type[0]).toBe("Dog");
  expect(favorite.age[0]).toBe(2);

  favorite.delect(0);
  expect(favorite.count).toBe(0);
  expect(favorite.index).toStrictEqual([]);
});

test("test_favorite", async () => {
  const wrapper = shallowMount(Favorite, {
    global: {
      plugins: [pinia],
    },
  });
  expect(wrapper.text()).toContain("Favorite Pets");
  expect(wrapper.text()).toContain(
    "Your favorite pets is empty! Please add some pets."
  );
});
