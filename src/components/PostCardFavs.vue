<template>
  <div class="card">
    <div class="card__img">
      <div v-if="post.images !== null && post.images[0].type == 'video/mp4'">
        <!-- SSI le post est une video -->
        <video autoplay muted loop><source :src="post.images[0].mp4" type="video/mp4" /></video>
      </div>
      <div v-else>
        <!-- SSI le post n'a qu'une image/video -->
        <div v-if="post.type == 'video/mp4'">
          <video autoplay muted loop><source :src="post.mp4" type="video/mp4" /></video>
        </div>
        <div v-else>
          <img v-if="post.type == 'image/jpeg'" :src="'https://i.imgur.com/' + post.cover + '.jpeg'" :alt="post.title" />
          <img v-if="post.type == 'image/jpg'" :src="'https://i.imgur.com/' + post.cover + '.jpg'" :alt="post.title" />
          <img v-if="post.type == 'image/png'" :src="'https://i.imgur.com/' + post.cover + '.png'" :alt="post.title" />
          <img v-if="post.type == 'image/gif'" :src="'https://i.imgur.com/' + post.cover + '.gif'" :alt="post.title" />
        </div>
      </div>
    </div>
    <div class="card__body">
      <h2 class="card__head">{{ post.title }}</h2>
      <!-- <p class="card__desc">{{ post.description }}</p> -->

      <button class="card__btn add-favorite" v-if="!post.favorite" v-on:click="favorite(post.cover)">
        <p>Add to Favs</p>
      </button>
      <button class="card__btn remove-favorite" v-else v-on:click="favorite(post.cover)">
        <p>Remove from Favs</p>
      </button>
    </div>
  </div>
</template>

<script>
import api from "./../api/imgur.js";
export default {
  name: "PostCard",
  props: {
    post: Object
  },
  methods: {
    favorite(id) {
      api.favorite(id);
      this.post.favorite = !this.post.favorite;
    }
  }
};
</script>
