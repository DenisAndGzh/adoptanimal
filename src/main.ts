import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar } from 'quasar'

import App from "./App.vue";
import router from "./router";
import iconSet from 'quasar/icon-set/fontawesome-v6'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, {
    config: {
        brand: {
            primary: '#8c9aa8',
            secondary: '#26A69A',
            accent: '#9C27B0',

            dark: '#1d1d1d',
            'dark-page': '#121212',

            positive: '#21BA45',
            negative: '#C10015',
            info: '#31CCEC',
            warning: '#F2C037'
        }
    }, iconSet: iconSet,
});
app.mount("#app");
