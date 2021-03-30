<template>
  <a :href="breadcrumb.link">{{ breadcrumb.title }}</a>
</template>

<script>
export default {
  name: "breadcrumbList",
  props: {
    breadcrumb: {
      type: Object,
      required: true,
    },
  },
};
</script>