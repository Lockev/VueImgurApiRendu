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
          <img :src="'https://api.imgur.com/3/image/' + post.id" :alt="post.title" />
        </div>
      </div>
    </div>
    <div class="card__body">
      <h2 class="card__head">{{ post.title }}</h2>
      <p class="card__desc">{{ post.description }}</p>
    </div>
    <a href="#" class="card__btn">Ajouter en Fav</a>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: Object
  }
};
</script>
