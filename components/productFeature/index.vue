<template>
  <div>
    <i class="far fa-check-circle color-success"></i> {{ feature.value }}
  </div>
</template>

<script>
export default {
  name: 'productFeature',
  props: {
    feature: {
      type: Object,
      required: true,
    },
  },
}
</script>