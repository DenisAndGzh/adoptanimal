import { shallowMount } from "@vue/test-utils";
import { expect, test } from "vitest";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import QandA from "../src/views/QuestionAndAnswerView.vue";

const pinia = createPinia().use(piniaPluginPersistedstate);

test("test_adopt", async () => {
  const wrapper = shallowMount(QandA, {
    global: {
      plugins: [pinia],
    },
  });
  expect(wrapper.text()).toContain("Why you need to adopt an animal");
  expect(wrapper.text()).toContain(
    "It will help you to save a lot of money because you don’t have to pay for the procedures yourself and it ensures the pet you are taking home is healthy"
  );
  expect(wrapper.text()).toContain("The Process of Adopting an Animal");
});
