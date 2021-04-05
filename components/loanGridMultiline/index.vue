<template>
  <div class="columns is-mobile is-multiline">
    <div
      v-for="item in items"
      :key="item.id"
      class="column is-12-mobile is-4-tablet is-4-desktop"
    >
      <loanGrid :loan="item"></loanGrid>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loanGridLayout',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>