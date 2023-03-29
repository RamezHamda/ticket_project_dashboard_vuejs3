import axios from 'axios';
// // import axios from "axios";
// // import axios from "axios";
// import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
// import { Actions, Mutations } from "@/store/enums/StoreEnums";

// export interface StoreInfo {
//   classes: {
//     header?: Array<string>;
//     headerContainer?: Array<string>;
//     headerMobile?: Array<string>;
//     headerMenu?: Array<string>;
//     aside?: Array<string>;
//     asideMenu?: Array<string>;
//     asideToggle?: Array<string>;
//     toolbar?: Array<string>;
//     toolbarContainer?: Array<string>;
//     content?: Array<string>;
//     contentContainer?: Array<string>;
//     footerContainer?: Array<string>;
//     sidebar?: Array<string>;
//     pageTitle?: Array<string>;
//   };
// }

// @Module
// export default class CatalogModule extends VuexModule implements StoreInfo {
//     classes = {};
//     all = [];
//     one = {};
//     errors = [];

//   /**
//    * Get current page title
//    * @returns string
//    */
//   get getAll() {
//     return this.all;
//   }

//   get getOne() {
//     return this.one;
//   }

//   @Mutation
//   setAll(payload) {
//     this.all = payload;
//   }

//   @Mutation
//   setOne(payload) {
//     this.one = payload;
//   }

//   @Mutation
//   setErrors(payload) {
//     this.errors = payload;
//   }


//   @Action
//   index(params) {
//     const res = axios.get('http://localhost:8000/api/v1/catalog/').then((res) => {
//       // let data = res.data.data;  
//       this.context.commit('setAll', res.data.data);
//     // console.log(res.data.data);
      
//       // this.context.commit("setAll", res.data);
//     }).catch ((err) => {
//       console.log(err.response);

//       // this.context.commit("setErrors", err);
//     });

//     // this.context.commit("setAll", res);

//     // fetch("http://localhost:8000/api/v1/catalog/")
//     //   .then((response) =>
//     //     response.json().then((res) => {
//     //       this.context.commit("setAll", res.data);
//     //     })
//     //   )
//     //   .then((json) => console.log(json));
//     // console.log("this.all");
//     // console.log(this.all);

//     // this.context.commit(Mutations.SET_CLASSNAME_BY_POSITION, payload);
//   }

//   // https://localhost:8000/api/v1/catalog/
//   // @Action
//   // show(params) {
//   //   axios.get(`/api/v1/catalog/${params.id}`, { params }).then((res) => {
//   //     this.context.commit("setOne", res.data);
//   //   });
//   // }

//   // @Action
//   // create(params) {
//   //   axios.post("/api/v1/catalog/", params).then((res) => {
//   //     this.context.commit("setOne", res.data);
//   //   });
//   // }

//   // @Action
//   // update(params) {
//   //   axios.put(`/api/v1/catalog/${params.id}`, params).then((res) => {
//   //     this.context.commit("setOne", res.data);
//   //   });
//   // }

//   // @Action
//   // destroy(params) {
//   //   axios.delete(`/api/v1/catalog/${params.id}`, { params }).then((res) => {
//   //     this.context.commit("setOne", res.data);
//   //   });
//   // }
  
// }


const catalog = {

    classes :{},
    all : [],
    one : {},
    errors : [],

  namespaced: true,

  // state: () => ({ name: "Ramez Catalog" }),

  state() {
    return{
      name: "Ramez test",
      age: 0,
      email: "ramez199586@gmail.com"
    }
  },
  getters: {
    getAge(state) {
      return state.age;
    },
    getName(state) {
      return state.name;
    },
    getEmail(state) {
      return state.email;
    },
  },
  mutations: {
    increment(state, age) {
      state.age = age;
    },
    displayName(state, name) {
      // console.log("Hello from mutations");
      // console.log(state.name);
      state.name = name;
    }
  },

  actions: {
    increment(context) {
      console.log("Hello from actions");

      context.commit("increment",80);
      context.commit("displayName", "Mohamed Ramez");

    },
  },
};

export default catalog;