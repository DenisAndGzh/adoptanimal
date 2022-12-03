<template>
  <div class="text-h3 text-center text-primary" style="padding: 25px 0 0px 0">
    Contact Details
  </div>
  <div class="row" style="padding: 30px 0 5px 0">
    <div class="col-3"></div>
    <div class="col-3 text-center text-h5 text-primary">
      Email: admin@adoptanimal.com
    </div>
    <div class="col-3 text-center text-h5 text-primary">
      Phone number: +xxxxxxxxxx
    </div>

    <div class="col-3"></div>
  </div>

  <div>
    <MessageTable></MessageTable>
  </div>
</template>

<script setup lang="ts">
import MessageTable from "../components/MessageTable.vue";
</script>

<style lang="scss" scoped></style>
