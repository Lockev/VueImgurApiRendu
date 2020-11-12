import Vuex from "vuex";
import Vue from "vue";
import oauth from "./modules/oauth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    oauth
  }
});
