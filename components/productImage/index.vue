<template>
  <div class="components---product_image">
    <figure class="image">
      <img
        class="product_image___image"
        :src="image.image"
        :alt="image.image"
      />
    </figure>
  </div>
</template>

<script>
export default {
  name: 'productImage',
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.components---product_image > figure > .product_image___image {
  border: 1px solid var(--finpediaBlack06);
  border-radius: var(--mediumRadius);
}
</style>