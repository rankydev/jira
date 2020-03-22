import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import * as firebase from "firebase";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBrgtVUnKa6v9eLLulX3KiuCgEqs5y-jm8",
      authDomain: "jira-dashboard-43191.firebaseapp.com",
      databaseURL: "https://jira-dashboard-43191.firebaseio.com",
      projectId: "jira-dashboard-43191",
      storageBucket: "jira-dashboard-43191.appspot.com",
      messagingSenderId: "1091749799228",
      appId: "1:1091749799228:web:e02e79e264adf8cc6eaa39",
      measurementId: "G-T8T2XVVKRY"
    });
  }
}).$mount("#app");
