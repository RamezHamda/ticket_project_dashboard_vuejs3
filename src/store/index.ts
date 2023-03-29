import { createStore } from "vuex";
import { config } from "vuex-module-decorators";

import AuthModule from "@/store/modules/AuthModule";
import BodyModule from "@/store/modules/BodyModule";
import BreadcrumbsModule from "@/store/modules/BreadcrumbsModule";
import ConfigModule from "@/store/modules/ConfigModule";
import catalog from "@/store/modules/CatalogModule";

config.rawError = true;

const store = createStore({
  state: () => ({
    age: 20,
  }),
  mutations: {
    displayAge(state, age) {
      state.age = age;
    },
  },
  actions: {
    incrementAge({commit}) {
      commit("displayAge", 30);
    },
  },
  getters: {
    name(state) {
      return state.name;
    },
  },

  modules: {
    AuthModule,
    BodyModule,
    BreadcrumbsModule,
    ConfigModule,
    catalog,
  },
});

export default store;
