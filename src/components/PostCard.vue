<template>
  <div class="card">
    <div class="card__img">
      <div v-if="post.images_count">
        <!-- SSI le post à plus d'une image/video -->
        <div v-if="post.images[0].type == 'video/mp4'">
          <video autoplay muted loop><source :src="post.images[0].link" type="video/mp4" /></video>
        </div>

        <div v-else>
          <img :src="post.images[0].link" :alt="post.title" />
        </div>
      </div>
      <div v-else>
        <!-- SSI le post n'a qu'une image/video -->
        <div v-if="post.type == 'video/mp4'">
          <video autoplay muted loop><source :src="post.link" type="video/mp4" /></video>
        </div>
        <div v-else><img :src="post.link" :alt="post.title" /></div>
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
