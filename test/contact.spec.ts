import { shallowMount } from "@vue/test-utils";
import { expect, test } from "vitest";
import Contact from "../src/views/ContactView.vue";

test("test_contact", async () => {
  const wrapper = shallowMount(Contact);
  expect(wrapper.text()).toContain("Contact Details");
  expect(wrapper.text()).toContain("Email: admin@adoptanimal.com");
  expect(wrapper.text()).toContain("Phone number: +xxxxxxxxxx");
});
