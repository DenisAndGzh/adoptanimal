<script setup lang="ts">
import { useRouter } from "vue-router";
const text = ref("");
const $router = useRouter();

const onClick_Donate = () => {
  $router.push({ path: "/donate" });
};
const onClick_Login = () => {
  $router.push({ path: "/login" });
};
</script>

<template>
  <q-layout view="hHh LpR fff">
    <q-header container reveal :reveal-offset="1" class="bg-primary text-white">
      <q-toolbar class="row bg-primary text-white">
        <div class="col-3">
          <q-toolbar>
            <q-toolbar-title class="text-center">
              <q-spinner-hearts color="red" size="3em" />
              Adopt Animal
            </q-toolbar-title>
          </q-toolbar>
        </div>
        <div class="col-6">
          <q-tabs container style="height: 55px; line-height: 55px">
            <q-route-tab to="/home" label="Home" />
            <q-route-tab to="/adopt" label="Adopt" />
            <q-route-tab to="/lostanimals" label="Lost Animals" />
            <q-route-tab to="/contact" label="Contact" />
          </q-tabs>
        </div>
        <div class="col-3">
          <q-toolbar>
            <q-toolbar-title class="row text-center">
              <q-input
                dark
                dense
                rounded
                outlined
                borderless
                v-model="text"
                input-class="text-right"
                class="q-ml-xs col-6"
              >
                <template v-slot:append>
                  <q-icon v-if="text === ''" name="search" />
                  <q-icon v-else name="clear" @click="text = ''" />
                </template>
              </q-input>
              <q-separator spaced="10px" dark vertical inset />
              <q-fab
                color="white"
                flat
                round
                dense
                icon="menu"
                padding="5px"
                direction="right"
              >
                <q-fab-action
                  padding="5px"
                  color="white"
                  text-color="primary"
                  @click="onClick_Login"
                  icon="fa-solid fa-user"
                />
                <q-fab-action
                  padding="5px"
                  color="white"
                  text-color="primary"
                  @click="onClick_Donate"
                  icon="fa-solid fa-hand-holding-heart"
                />
              </q-fab>
            </q-toolbar-title>
          </q-toolbar>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>
        <router-view></router-view>
      </q-page>
    </q-page-container>

    <q-footer class="bg-primary text-white FooterCustomStyle">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <q-toolbar>
            <q-toolbar-title class="text-center FooterCustomStyle">
              <span style="font-size: 15px">Copyright © 2022 Adopt Animal</span>
            </q-toolbar-title>
          </q-toolbar>
        </div>
        <div class="col-3">
          <q-toolbar>
            <q-toolbar-title class="text-center FooterCustomStyle">
              <q-btn flat round dense icon="call" />
              <q-btn flat round dense icon="shopping_cart" />
              <q-btn flat round dense icon="email" />
              <q-btn
                flat
                round
                dense
                icon="fa-brands fa-github"
                href="https://github.com/DenisAndGzh/adoptanimal"
              />
            </q-toolbar-title>
          </q-toolbar>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<style lang="scss" scoped>
.FooterCustomStyle {
  .q-toolbar {
    min-height: 35px;
  }
  height: 35px !important;
}
</style>
