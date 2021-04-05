<template>
  <div class="components---hero_image">
    <figure :key="image.id" class="image">
      <img
        class="hero_image___image"
        :src="image.image"
        :alt="image.title"
      />
    </figure>
  </div>
</template>

<script>
export default {
  name: 'heroImage',
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.components---hero_image > figure > .hero_image___image {
  border-radius: var(--mediumRadius);
}
</style>