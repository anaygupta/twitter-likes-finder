import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import store from "./store";

// import google oauth library
import GAuth from "vue3-google-oauth2";
const gAuthOptions = {
  clientId:
    "230387097801-la30otst77ac3fog9d5uhtqm6o672h76.apps.googleusercontent.com",
  scope: [
    "openid",
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://mail.google.com/",
    "https://www.googleapis.com/auth/calendar",
    "https://www.googleapis.com/auth/contacts",
  ],
  prompt: "consent",
  fetch_basic_profile: true,
};

// setting up app
const app = createApp(App);
app.use(router);
app.use(store);
app.use(GAuth, gAuthOptions);
// mount the app
app.mount("#app");
