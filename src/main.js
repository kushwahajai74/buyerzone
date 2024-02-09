import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faTimes,
  faBagShopping,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

library.add(faBars, faTimes, faBagShopping, faTelegram, faStar);

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");
