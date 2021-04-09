<template>
  <div class="components---sticky_button_mobile is-flex-mobile">
    <a href="#" class="button is-rounded is-primary is-fullwidth">
      Ajukan sekarang
    </a>
  </div>
</template>

<script>
export default {
  name: "stickyButtonMobile",
};
</script>

<style scoped>
.components---sticky_button_mobile {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    box-shadow: var(--shadow);
}
</style>
