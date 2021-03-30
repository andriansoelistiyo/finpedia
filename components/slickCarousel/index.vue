<template>
  <div class="components---slick_carousel">
    <VueSlickCarousel v-bind="settings">
      <div>
        <img class="slick_carousel___image"
          src="~/assets/img/bannerCarousel/banner1.jpeg"
          alt="bannerCarousel"
        />
      </div>
      <div>
        <img class="slick_carousel___image"
          src="~/assets/img/bannerCarousel/banner2.jpeg"
          alt="bannerCarousel"
        />
      </div>
      <div>
        <img class="slick_carousel___image"
          src="~/assets/img/bannerCarousel/banner3.jpeg"
          alt="bannerCarousel"
        />
      </div>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "slickCarousel",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
        slidesToShow: 1,
        lazyLoad: "ondemand",
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        arrows: true,
        useCSS: true,
      },
    };
  },
};
</script>

<style scoped>

</style>