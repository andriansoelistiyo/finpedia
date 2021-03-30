<template>
  <div class="columns is-mobile scroll-horizontal-mobile">
    <div
      v-for="item in items"
      :key="item.id"
      class="column is-12-mobile is-4-tablet is-3-desktop container-mobile-grid-show-1"
    >
      <ccGrid :cc="item"></ccGrid>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ccGridLayout',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>