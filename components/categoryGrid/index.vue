<template>
  <a href="#">
    <div class="components---category">
      <figure class="image">
        <img
          class="category___image"
          :src="category.image"
          :alt="category.title"
        />
      </figure>
      <h3 class="category___title">{{ category.title }}</h3>
    </div>
  </a>
</template>

<script>
export default {
  name: 'categoryGrid',
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
/* category card */
.components---category {
  border-radius: var(--mediumRadius);
  background-color: var(--white);
  text-align: center;
  color: var(--finpediaBlack01);
  -webkit-transition: -webkit-box-shadow 0.3s;
  transition: -webkit-box-shadow 0.3s;
  transition: box-shadow 0.3s;
}

/* category image */
.components---category > figure > .category___image {
  border-radius: 100%;
  margin: 0 auto;
}

/* category title */
.components---category > .category___title {
  font-family: finpediaRoboto400;
  margin-top: 8px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-wrap: break-word;
  overflow: hidden;
}

/* mobile screen */
@media screen and (max-width: 576px) {
  /* code */

  /* category image */
  .components---category > figure > .category___image {
    height: 72px;
    width: 72px;
  }

  /* category font */
  .components---category > .category___title {
    font-size: var(--body03);
    line-height: var(--lhBody03);
    height: 36px;
  }
}

/* horizontal mobile screen */
@media screen and (min-width: 577px) and (max-width: 768px) {
  /* code */

  /* category image */
  .components---category > figure > .category___image {
    height: 72px;
    width: 72px;
  }

  /* category font */
  .components---category > .category___title {
    font-size: var(--body03);
    line-height: var(--lhBody03);
    height: 36px;
  }
}

/* ipad screen */
@media screen and (min-width: 767px) and (max-width: 992px) {
  /* code */

  /* category image */
  .components---category > figure > .category___image {
    height: 72px;
    width: 72px;
  }

  /* category font */
  .components---category > .category___title {
    font-size: var(--body02);
    line-height: var(--lhBody02);
    height: 42px;
  }
}

/* ipad pro screen */
@media screen and (min-width: 993px) and (max-width: 1200px) {
  /* code */

  /* category image */
  .components---category > figure > .category___image {
    height: 72px;
    width: 72px;
  }

  /* category font */
  .components---category > .category___title {
    font-size: var(--body02);
    line-height: var(--lhBody02);
    height: 42px;
  }
}

/* desktop screen */
@media screen and (min-width: 1201px) {
  /* code */

  /* category image */
  .components---category > figure > .category___image {
    height: 88px;
    width: 88px;
  }

  /* category card */
  .components---category {
    padding: 16px;
    -webkit-box-shadow: var(--shadow);
    box-shadow: var(--shadow);
  }
  .components---category:hover {
    -webkit-box-shadow: var(--shadowHover);
    box-shadow: var(--shadowHover);
  }

  /* category font */
  .components---category > .category___title {
    font-size: var(--body02);
    line-height: var(--lhBody02);
    height: 42px;
  }
}
</style>