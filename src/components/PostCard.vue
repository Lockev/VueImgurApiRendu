<template>
  <div class="card">
    <div class="card__img">
      <div v-if="post.images_count">
        <!-- SSI le post à plus d'une image/video -->
        <div v-if="post.images[0].type == 'video/mp4'">
          <video><source :src="post.images[0].link" type="video/mp4" /></video>
        </div>

        <div v-else>
          <img :src="post.images[0].link" :alt="post.title" />
        </div>
      </div>
      <div v-else>
        <p>{{ post.link }}</p>
        <!-- SSI le post n'a qu'une image/video -->
        <div v-if="post.type == 'video/mp4'">
          <video><source :src="post.link" type="video/mp4" /></video>
        </div>
        <div v-else><img :src="post.link" :alt="post.title" /></div>
      </div>
    </div>
    <div class="card__body">
      <h2 class="card__head">{{ post.title }}</h2>
      <p class="card__desc">{{ post.description }}</p>
    </div>
    <button class="button">
      <a href="#" class="card__btn">Ajouter en Fav</a>
    </button>
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
