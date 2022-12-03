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
            <q-route-tab to="/favorite" label="Favorite" />
            <q-route-tab to="/questionandanswer" label="Q&A" />
            <q-route-tab to="/contact" label="Contact" />
          </q-tabs>
        </div>
        <div class="col-3">
          <q-toolbar>
            <q-toolbar-title class="row">
              <q-form @submit="onSubmit">
                <q-input
                  dark
                  dense
                  rounded
                  outlined
                  borderless
                  type="text"
                  v-model="text"
                  input-class="text-left"
                  class="q-ml-xxs"
                  name="search_value"
                >
                  <template v-slot:append>
                    <q-icon v-if="text === ''" name="search" />
                    <q-icon v-else name="clear" @click="text = ''" />
                  </template>
                </q-input>
              </q-form>
            </q-toolbar-title>
          </q-toolbar>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>
        <Suspense>
          <router-view></router-view>
        </Suspense>
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
              <q-btn
                flat
                round
                dense
                icon="fa-solid fa-heart"
                @click="onClick_Favorite"
              />
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

<script setup lang="ts">
const text = ref("");
const router = useRouter();

const onClick_Favorite = () => {
  router.push({ path: "/favorite" });
};

const doSearch = (search: string) => {
  console.log(search);
};

const onSubmit = (form: any) => {
  const search = form.target[0]._value;
  if (search !== "") {
    doSearch(search);
  }
};
</script>

<style lang="scss" scoped>
.FooterCustomStyle {
  .q-toolbar {
    min-height: 35px;
  }
  height: 35px !important;
}
</style>
