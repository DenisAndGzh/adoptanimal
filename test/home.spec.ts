import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import Home from "../src/views/HomeView.vue";

test("test_home", () => {
  const wrapper = mount(Home);
  expect(wrapper.text()).toBe("");
});
