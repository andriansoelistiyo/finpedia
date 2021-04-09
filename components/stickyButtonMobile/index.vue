<template>
  <div class="components---sticky_button_mobile is-hidden-tablet">
    <a
      href="/form"
      class="button is-normal is-rounded is-fullwidth is-info has-text-weight-bold sticky_button_mobile___button-item"
    >
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
  box-shadow: var(--shadowHover);
  z-index: 1;
  padding: 8px 16px;
  background-color: var(--white);
}

.sticky_button_mobile___button-item {
  background-color: var(--finpediaBlue04);
  -webkit-transition: -webkit-background-color 0.3s;
  transition: -webkit-background-color 0.3s;
  transition: background-color 0.3s;
}
.sticky_button_mobile___button-item:hover {
  background-color: var(--finpediaBlue03);
}
.sticky_button_mobile___button-item:active {
  background-color: var(--finpediaBlue03);
}
</style>
