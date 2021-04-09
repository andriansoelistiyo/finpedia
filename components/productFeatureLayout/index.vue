<template>
  <div class="components---feature">
    <div class="feature___title">Fitur</div>
    <div v-for="item in items" :key="item.id" class="feature___item">
      <productFeature :feature="item"></productFeature>
    </div>
  </div>
</template>

<script>
export default {
  name: "productFeatureLayout",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* cc feature */
.components---feature {
  margin-top: 32px;
}
.components---feature > .feature___title {
  font-family: finpediaRoboto900;
  color: var(--finpediaBlack01);
}
.components---feature > .feature___item {
  font-family: finpediaRoboto400;
  color: var(--finpediaBlack02);
  margin-top: 8px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  word-wrap: break-word;
  overflow: hidden;
}

/* mobile screen */
@media screen and (max-width: 576px) {
  /* code */

  /* cc feature font */
  .components---feature > .feature___title {
    font-size: var(--heading05);
    line-height: var(--lhHeading05);
  }
  .components---feature > .feature___item {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
}

/* horizontal mobile screen */
@media screen and (min-width: 577px) and (max-width: 768px) {
  /* code */

  /* cc feature font */
  .components---feature > .feature___title {
    font-size: var(--heading05);
    line-height: var(--lhHeading05);
  }
  .components---feature > .feature___item {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
}

/* ipad screen */
@media screen and (min-width: 767px) and (max-width: 992px) {
  /* code */

  /* cc feature font */
  .components---feature > .feature___title {
    font-size: var(--heading05);
    line-height: var(--lhHeading05);
  }
  .components---feature > .feature___item {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
}

/* ipad pro screen */
@media screen and (min-width: 993px) and (max-width: 1200px) {
  /* code */

  /* cc feature font */
  .components---feature > .feature___title {
    font-size: var(--heading05);
    line-height: var(--lhHeading05);
  }
  .components---feature > .feature___item {
    font-size: var(--body03);
    line-height: var(--lhBody03);
  }
}

/* desktop screen */
@media screen and (min-width: 1201px) {
  /* code */

  /* cc feature font */
  .components---feature > .feature___title {
    font-size: var(--heading05);
    line-height: var(--lhHeading05);
  }
  .components---feature > .feature___item {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
}
</style>