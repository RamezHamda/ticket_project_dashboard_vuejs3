const moduleA = {
  namespaced: true,
  state: () => ({ name: "Ramez test" }),

  mutations: {
    increment(state, age) {
      console.log("moduleA");

      state.age = age;
    },
  },

  actions: {
    increment(context) {
      console.log("Hello from actions");

      context.commit("increment");
    },
  },
};

export default moduleA;
