<script setup lang="ts"></script>

<template>
  <q-layout view="hHh LpR fff">
    <q-header
      container
      style="height: 30px; line-height: 30px"
      reveal
      :reveal-offset="1"
      class="bg-primary text-white"
    >
      <q-toolbar-title class="text-left">
        <q-btn
          to="/adopt"
          label="Adopt a pet"
          size="8px"
          color="blue"
          text-color="black"
        />
        <q-btn
          to="/home"
          label="Go Home"
          size="8px"
          color="white"
          text-color="black"
        />
      </q-toolbar-title>
    </q-header>

    <q-page-container>
      <q-page padding style="padding-top: 66px">
        <router-view></router-view>

        <q-page-sticky expand position="top" :offset="[0, -2]">
          <q-toolbar class="row bg-primary text-white">
            <div class="col-3">
              <q-toolbar>
                <q-toolbar-title class="text-center">
                  Adopt
                  <img
                    alt="Vue logo"
                    class="logo"
                    src="../assets/logo.svg"
                    width="20"
                    height="20"
                  />n Animal
                </q-toolbar-title>
              </q-toolbar>
            </div>
            <div class="col-6">
              <q-tabs container style="height: 65px; line-height: 65px">
                <q-route-tab to="/home" label="Home" />
                <q-route-tab to="/adopt" label="Adopt" />
                <q-route-tab to="/lostanimals" label="Lost Animals" />
                <q-route-tab to="/contact" label="Contact" />
              </q-tabs>
            </div>
            <div class="col-3">
              <q-toolbar>
                <q-toolbar-title class="text-center">
                  <q-btn flat round dense icon="person" />
                  <q-btn flat round dense icon="volunteer_activism" />
                </q-toolbar-title>
              </q-toolbar>
            </div>
          </q-toolbar>
        </q-page-sticky>
      </q-page>
    </q-page-container>

    <q-footer class="bg-grey-5 text-white">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <q-toolbar>
            <q-toolbar-title class="text-center">
              <div>@Adopt Animal 2022</div>
            </q-toolbar-title>
          </q-toolbar>
        </div>
        <div class="col-3">
          <q-toolbar>
            <q-toolbar-title class="text-center">
              <q-btn flat round dense icon="call" />
              <q-btn flat round dense icon="shopping_cart" />
              <q-btn flat round dense icon="email" />
              <q-btn flat round dense icon="home" />
            </q-toolbar-title>
          </q-toolbar>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<style></style>
