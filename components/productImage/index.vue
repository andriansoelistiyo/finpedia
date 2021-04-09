<template>
  <div class="components---product_image">
    <figure :key="image.id" class="image">
      <img
        class="product_image___image"
        :src="image.image"
        :alt="image.title"
      />
    </figure>
  </div>
</template>

<script>
export default {
  name: "productImage",
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.components---product_image > figure > .product_image___image {
  border: 1px solid var(--finpediaBlack06);
  border-radius: var(--mediumRadius);
}
/* mobile screen */
@media screen and (max-width: 576px) {
  /* code */

  .components---product_image > figure {
    background-color: var(--finpediaBlack06);
    border-radius: var(--smallRadius);
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .components---product_image > figure > .product_image___image {
    border: unset;
    border-radius: var(--mediumRadius);
    max-height: 100px;
    width: auto;
    margin: 0 auto;
  }
}

/* horizontal mobile screen */
@media screen and (min-width: 577px) and (max-width: 768px) {
  /* code */

  .components---product_image > figure {
    background-color: var(--finpediaBlack06);
    border-radius: var(--smallRadius);
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .components---product_image > figure > .product_image___image {
    border: unset;
    border-radius: var(--mediumRadius);
    max-height: 100px;
    width: auto;
    margin: 0 auto;
  }
}

/* ipad screen */
@media screen and (min-width: 767px) and (max-width: 992px) {
  /* code */
}

/* ipad pro screen */
@media screen and (min-width: 993px) and (max-width: 1200px) {
  /* code */
}

/* desktop screen */
@media screen and (min-width: 1201px) {
  /* code */
}
</style>
