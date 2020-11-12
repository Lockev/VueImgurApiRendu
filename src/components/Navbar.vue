<template>
  <div>
    <nav class="nav">
      <div class="nav--item"><router-link to="/" class="nav--item__link">Home</router-link></div>
      <div class="nav--item"><router-link to="/login" class="nav--item__link">Login</router-link></div>
      <div class="nav--item"><router-link to="/favs" class="nav--item__link">Favs</router-link></div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navbar",

  data() {
    return {};
  }
};
</script>
