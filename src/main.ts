import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import { Quasar } from "quasar";
import iconSet from "quasar/icon-set/fontawesome-v6";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(Quasar, {
  iconSet: iconSet,
});

app.mount("#app");
