<template>
  <div class="columns is-mobile is-multiline">
    <div
      v-for="item in items"
      :key="item.id"
      class="column is-6-mobile is-4-tablet is-2-desktop"
    >
      <partnerGrid :partner="item"></partnerGrid>
    </div>
  </div>
</template>

<script>
export default {
  name: 'partnerGridLayout',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>