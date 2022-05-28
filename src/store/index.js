import { createStore } from "vuex";
// import router from "../router";

// import createPersistedState from "vuex-persistedstate";
// import { Magic, SDKError, RPCError, ExtensionError } from "magic-sdk";

// const magicKey = new Magic(process.env.VUE_APP_MAGIC_API_KEY);

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
  //   state: {
  //     user: null,
  //     userInbox: null,
  //   },
  //   mutations: {
  //     setUser(state, userData) {
  //       state.user = userData;
  //     },
  //     setGmailUser(state, userData) {
  //       state.userInbox = userData;
  //     },
  //   },
  //   actions: {
  //     // magic login action
  //     async login({ commit }, email) {
  //       try {
  //         await magicKey.auth.loginWithMagicLink(email);
  //         const data = await magicKey.user.getMetadata();
  //         commit("setUser", data);
  //         await router.push({ name: "Profile" });
  //       } catch (error) {
  //         if (error instanceof SDKError) {
  //           console.log(error);
  //         }
  //         if (error instanceof RPCError) {
  //           console.log(error);
  //         }
  //         if (error instanceof ExtensionError) {
  //           console.log(error);
  //         }
  //       }
  //     },
  //     // magic logout action
  //     async logout({ commit }) {
  //       await magicKey.user.logout();
  //       commit("setUser", null);
  //       await router.push({ name: "Product" });
  //     },
  //     // gmail login action
  //     async loginGoogle() {
  //       this.$gapi.login().then(({ currentUser, gapi, hasGrantedScopes }) => {
  //         console.log({ currentUser, gapi, hasGrantedScopes });
  //       });
  //     },
  //   },
  //   modules: {},
  //   plugins: [createPersistedState()],
});
