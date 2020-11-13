<template>
  <div class="card">
    <div class="card__img">
      <div v-if="post.images !== null && post.images[0].type == 'video/mp4'">
        <!-- SSI le post est une video -->
        <video><source :src="post.images[0].mp4" type="video/mp4" /></video>
      </div>
      <div v-else>
        <!-- SSI le post n'a qu'une image/video -->
        <div v-if="post.type == 'video/mp4'">
          <video><source :src="post.mp4" type="video/mp4" /></video>
        </div>
        <div v-else>
          <img
            v-if="post.type == 'image/jpeg'"
            :src="'https://i.imgur.com/' + post.cover + '.jpeg'"
            :alt="post.title"
          />
          <img
            v-if="post.type == 'image/jpg'"
            :src="'https://i.imgur.com/' + post.cover + '.jpg'"
            :alt="post.title"
          />
          <img
            v-if="post.type == 'image/png'"
            :src="'https://i.imgur.com/' + post.cover + '.png'"
            :alt="post.title"
          />
          <img
            v-if="post.type == 'image/gif'"
            :src="'https://i.imgur.com/' + post.cover + '.gif'"
            :alt="post.title"
          />
        </div>
      </div>
    </div>
    <div class="card__body">
      <h2 class="card__head">{{ post.title }}</h2>
      <p class="card__desc">{{ post.description }}</p>
    </div>
    <!-- <button class="button">
      <a href="#" class="card__btn">Ajouter en Fav</a>
    </button> -->
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: Object,
  },
};
</script>
