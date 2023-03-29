<template></template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },

  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  mounted() {
    this.$store.dispatch("increment");
    console.log("mounted");
  },
  methods: {
    increment() {
      this.$store.dispatch("increment");
    },
  },

  created() {
    console.log("created");
  },
};
</script>

<style></style>
