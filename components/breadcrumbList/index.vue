<template>
  <a href="#">{{ breadcrumb.title }}</a>
</template>

<script>
export default {
  name: 'breadcrumbList',
  props: {
    breadcrumb: {
      type: Object,
      required: true,
    },
  },
}
</script>