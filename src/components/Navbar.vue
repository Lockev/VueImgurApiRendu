<template>
  <div>
    <nav class="nav">
      <div class="nav--item"><router-link :to="{ name: 'Index' }" class="nav--item__link">Home</router-link></div>
      <div class="nav--item"><router-link :to="{ name: 'Login' }" class="nav--item__link">Login</router-link></div>
      <div class="nav--item"><router-link :to="{ name: 'Favs' }" class="nav--item__link">Favs</router-link></div>
    </nav>
  </div>
</template>
<script>
import router from "vue-router";
export default {
  name: "Navbar",
  methods: {
    logout: () => {
      localStorage.removeItem("imgur_token");
      router.push({ name: "Index" });
    }
  },
  data() {
    return {};
  }
};
</script>
