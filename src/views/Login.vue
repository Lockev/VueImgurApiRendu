<template>
  <div class="container">
    <div>
      <a class="" v-on:click="login">Login</a>
      <button class="button" v-on:click="login">Login</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Index",
  methods: mapActions(["login"]),
  data() {
    return {};
  },
};
</script>
