<template>
  <div>
    <nav class="nav">
      <div class="nav--item"><router-link :to="{ name: 'Index' }" class="nav--item__link">Home</router-link></div>
      <div class="nav--item"><router-link :to="{ name: 'Favs' }" class="nav--item__link">Favs</router-link></div>

      <div class="nav--item" v-if="imgur_token === null"><router-link :to="{ name: 'Login' }" class="nav--item__link">Login</router-link></div>
      <div class="nav--item" v-else><div class="nav--item__link" v-on:click="logout">Logout</div></div>
    </nav>
  </div>
</template>
<script>
// import router from "vue-router";

function getUrlVars() {
  var vars = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
    vars[key] = value;
  });
  return vars;
}

export default {
  name: "Navbar",
  data() {
    return {
      imgur_token: null
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("imgur_token");
      this.imgur_token = null;
      document.location.href = "http://localhost:8081/#/";
    }
  },
  beforeMount() {
    if (localStorage.getItem("imgur_token") === null) {
      this.imgur_token = localStorage.getItem("imgur_token");
    }
    return false;
  },
  created() {
    let token = getUrlVars()["access_token"];
    if (token) {
      window.localStorage.setItem("imgur_token", token);
      this.imgur_token = token;
    }
  }
};
</script>
