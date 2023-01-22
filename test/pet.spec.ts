import { expect, test } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useAnimalsStore } from "@/stores/animals";
import { useFavoriteStore } from "@/stores/favorites";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia().use(piniaPluginPersistedstate);

test("test_animail_store", async () => {
  setActivePinia(pinia);
  const animals = useAnimalsStore();
  await animals.init();
  expect(animals.url.length).toBe(6);
});

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
