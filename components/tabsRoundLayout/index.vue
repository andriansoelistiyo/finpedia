<template>
  <div class="components---tabs_round">
    <div class="tabs is-toggle is-toggle-rounded fs-body02">
      <ul>
        <li v-for="item in items" :key="item.id">
          <tabsRound :tabs="item"></tabsRound>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabsRoundLayout',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.components---tabs_round {
  margin-bottom: 16px;
}

.components---tabs_round > div > ul > li > .tabs_round___item {
  border-radius: var(--bigRadius) !important;
}

.components---tabs_round > div > ul > .is-active > .tabs_round___item {
  background-color: var(--finpediaBlue04);
  border-color: var(--finpediaBlue04);
}

/* mobile screen */
@media screen and (max-width: 576px) {
  /* code */

  .components---tabs_round > div > ul > li > .tabs_round___item {
    margin-right: 8px;
  }
}

/* horizontal mobile screen */
@media screen and (min-width: 577px) and (max-width: 768px) {
  /* code */

  .components---tabs_round > div > ul > li > .tabs_round___item {
    margin-right: 8px;
  }
}

/* ipad screen */
@media screen and (min-width: 767px) and (max-width: 992px) {
  /* code */

  .components---tabs_round > div > ul > li > .tabs_round___item {
    margin-right: 8px;
  }
}

/* ipad pro screen */
@media screen and (min-width: 993px) and (max-width: 1200px) {
  /* code */

  .components---tabs_round > div > ul > li > .tabs_round___item {
    margin-right: 16px;
  }
}

/* desktop screen */
@media screen and (min-width: 1201px) {
  /* code */

  .components---tabs_round > div > ul > li > .tabs_round___item {
    margin-right: 16px;
  }
}
</style>