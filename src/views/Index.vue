<template>
  <div class="container">
    <p>Vous etes sur l'index</p>
    <div class="posts-container">
      <!-- <div v-for="post in posts" :key="post">
        {{ post }}
        <hr />
      </div> -->
      <PostCard v-for="(post, index) in posts" :key="index" :post="post"></PostCard>
    </div>
    <!-- <p>{{ posts }}</p> -->
  </div>
</template>

<script>
// import api from "./../api/imgur.js";
import axios from "axios";

import PostCard from "./../components/PostCard";

export default {
  name: "Index",
  components: {
    PostCard
  },
  data() {
    return {
      posts: {}
    };
  },
  mounted() {
    axios
      .get("https://api.imgur.com/3/gallery/hot/viral/0.json")
      .catch(e => {
        console.log(e);
      })
      .then(response => {
        this.posts = response.data.data;
        console.log(response.data.data);
      });
  }
};
</script>
