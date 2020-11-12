<template>
  <div class="container">
    <div>
      <a class="" v-on:click="login">Login</a>
      <button class="button" v-on:click="login">Login</button>
    </div>
  </div>
</template>

<script>
import api from "./../api/imgur.js";
import router from "vue-router";

export default {
  name: "Index",
  methods: {
    login: () => {
      api.login();
      router.push({ name: "Index" });
    }
  },
  data() {
    return {};
  }
};
</script>
