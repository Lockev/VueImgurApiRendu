<template>
  <div class="container">
    <div>
      <a class="" v-on:click="login">Login</a>
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
  }
};
</script>
