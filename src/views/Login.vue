<template>
  <div class="container center">
    <a class="text-login" v-on:click="login">Connect to Imgur</a>
    <button class="login--button" v-on:click="login">Log on Imgur</button>
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
