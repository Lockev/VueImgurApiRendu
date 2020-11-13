<template>
  <div class="card">
    <div class="card__img">
      <div v-if="post.images[0].type == 'video/mp4'">
        <video><source :src="post.images[0].link" type="video/mp4" /></video>
      </div>
      <div v-else><img :src="post.images[0].link" :alt="post.title" /></div>
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
<style scoped>
.card {
  background-color: rgb(134, 134, 134);
  margin: 1em 2em;
  width: 300px;
}
.card img {
  width: 100%;
}
</style>
