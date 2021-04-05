<template>
  <nav
    :class="[
      'breadcrumb',
      variant === 'small'
        ? 'is-small'
        : variant === 'medium'
        ? 'is-medium'
        : variant === 'larga'
        ? 'is-large'
        : '',
    ]"
    aria-label="breadcrumbs"
  >
    <ul>
      <li v-for="item in items" :key="item.id">
        <a :href="item.link">{{ item.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'breadcrumbListLayout',
  props: {
    variant: String,
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>