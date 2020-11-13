<template>
  <div class="container">
    <div v-if="imgur_token === null">Veuillez-vous connecter pour pouvoir ajouter des posts à vos favoris.</div>
    <div v-else class="posts-container">
      <div class="posts-column" id="posts-column-1">
        <PostCardFavs v-for="(post, index) in posts1" :key="index" :post="post"></PostCardFavs>
      </div>
      <div class="posts-column" id="posts-column-2">
        <PostCardFavs v-for="(post, index) in posts2" :key="index" :post="post"></PostCardFavs>
      </div>
      <div class="posts-column" id="posts-column-3">
        <PostCardFavs v-for="(post, index) in posts3" :key="index" :post="post"></PostCardFavs>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import PostCardFavs from "./../components/PostCardFavs";

export default {
  name: "Favs",
  components: {
    PostCardFavs
  },
  data() {
    return {
      imgur_token: null,
      nickname: "",
      current_check_element: 1,
      next_posts_list: 1,
      posts: [],
      posts1: [],
      posts2: [],
      posts3: []
    };
  },
  beforeMount() {
    if (localStorage.getItem("imgur_token") !== null) {
      this.imgur_token = localStorage.getItem("imgur_token");
    }
    return false;
  },
  mounted() {
    if (this.imgur_token !== null) {
      axios // Get user nickname
        .get("https://api.imgur.com/3/account/me", {
          headers: {
            Authorization: "Bearer " + this.imgur_token
          }
        })
        .catch(e => {
          console.log(e);
        })
        .then(response => {
          this.nickname = response.data.data.url;

          axios // Get favorites linked to user's nickname
            .get("https://api.imgur.com/3/account/" + this.nickname + "/favorites/", {
              headers: {
                Authorization: "Bearer " + this.imgur_token
              }
            })
            .catch(e => {
              console.log(e);
            })
            .then(response => {
              response.data.data.forEach(element => {
                //   if (element.images == null) {
                //     axios // Get favorites linked to user's nickname
                //       .get("https://api.imgur.com/3/image/" + element.id)
                //       .catch(e => {
                //         console.log(e);
                //       })
                //       .response({
                //       });
                //   } else {
                switch (this.next_posts_list) {
                  case 1:
                    this.posts1.push(element);
                    this.next_posts_list++;
                    break;
                  case 2:
                    this.posts2.push(element);
                    console.log(this.posts2);
                    this.next_posts_list++;
                    break;
                  case 3:
                    this.posts3.push(element);
                    console.log(this.posts3);
                    this.next_posts_list = 1;
                    break;
                }
                // }
              });
            });
        });
    }
  }
};
</script>
