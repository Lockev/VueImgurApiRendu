<template>
  <div class="container">
    <div class="posts-container">
      <div class="posts-column" id="posts-column-1">
        <PostCard v-for="(post, index) in posts1" :key="index" :post="post"></PostCard>
      </div>
      <div class="posts-column" id="posts-column-2">
        <PostCard v-for="(post, index) in posts2" :key="index" :post="post"></PostCard>
      </div>
      <div class="posts-column" id="posts-column-3">
        <PostCard v-for="(post, index) in posts3" :key="index" :post="post"></PostCard>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

import PostCard from "./../components/PostCard";

export default {
  name: "Index",
  components: {
    PostCard
  },
  data() {
    return {
      posts1: [],
      posts2: [],
      posts3: []
    };
  },
  mounted() {
    axios
      .get("https://api.imgur.com/3/gallery/hot/viral/0.json")
      .catch(e => {
        console.log(e);
      })
      .then(response => {
        let i = 1;
        response.data.data.forEach(element => {
          switch (i) {
            case 1:
              this.posts1.push(element);
              i++;
              break;
            case 2:
              this.posts2.push(element);
              i++;
              break;
            case 3:
              this.posts3.push(element);
              i = 1;
              break;
          }
        });
      });
  }
};
</script>
