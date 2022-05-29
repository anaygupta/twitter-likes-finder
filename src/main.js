import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import store from "./store";


// setting up app
const app = createApp(App);
app.use(router);
app.use(store);
// mount the app
app.mount("#app");
