<template>
  <a href="#" class="tabs_round___item"> {{ tabs.title }} </a>
</template>

<script>
export default {
  name: 'tabsRound',
  props: {
    tabs: {
      type: Object,
      required: true,
    },
  },
}
</script>