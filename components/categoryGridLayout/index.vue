<template>
  <div class="columns is-mobile is-multiline">
    <div
      v-for="item in items"
      :key="item.id"
      class="column is-4-mobile is-4-tablet is-2-desktop"
    >
      <categoryGrid :category="item"></categoryGrid>
    </div>
  </div>
</template>

<script>
export default {
  name: 'categoryGridLayout',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>