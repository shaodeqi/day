import { createApp } from "vue";
import { registerSW } from "virtual:pwa-register";

if ("serviceWorker" in navigator) {
  // && !/localhost/.test(window.location)) {
  registerSW();
}

import App from "./app.vue";
const app = createApp(App);
// app.use(VueAwesomeSwiper);
app.mount("#app");
