<template>
  <div class="components---breadcrumb">
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
      <ul class="breadcrumb___parent">
        <li v-for="item in items" :key="item.id">
          <a :href="item.link">{{ item.title }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "breadcrumbListLayout",
  props: {
    variant: String,
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.components---breadcrumb > nav > .breadcrumb___parent {
  flex-wrap: nowrap;
}
</style>