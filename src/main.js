// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import firebase from 'firebase'


var config = {
  apiKey: "AIzaSyCzxMIqOvz2SJsCOF-v7otryWofYXEVv74",
  authDomain: "projeto-vue-870ab.firebaseapp.com",
  databaseURL: "https://projeto-vue-870ab.firebaseio.com",
  projectId: "projeto-vue-870ab",
  storageBucket: "projeto-vue-870ab.appspot.com",
  messagingSenderId: "420246111496"
};
firebase.initializeApp(config);

Vue.use(Vuetify, { theme: {
  primary: '#ee44aa',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Vue.config.productionTip = false

/* eslint-disable no-new */
firebase.auth()
  .onAuthStateChanged(() => {
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>',
    });
  });
