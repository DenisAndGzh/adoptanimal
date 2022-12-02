<template><div></div></template>

<script setup lang="ts">
import { useAnimalsStore } from "@/stores/animals";
const route = useRoute();
const Animals = useAnimalsStore();
const id = route.query.id;
Animals.getAnimalById(id as string);
console.log(id);
</script>

<style lang="scss" scoped></style>
