<template>
  <div class="container">
    <p>Vous etes sur l'index</p>
    <p>{{ token || "pas de token" }}</p>
  </div>
</template>

<script>
function getUrlVars() {
  var vars = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (
    m,
    key,
    value
  ) {
    vars[key] = value;
  });
  return vars;
}

export default {
  name: "Index",
  computed: {
    token: function () {
      return localStorage.getItem("imgur_token");
    },
  },
  created() {
    let token = getUrlVars()["access_token"];
    console.log(token);
    window.localStorage.setItem("imgur_token", token);
  },
  data() {
    return {};
  },
};
</script>
