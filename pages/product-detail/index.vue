<template>
  <div id="finpedia-product-detail" class="py-16">
    <!-- sticky button mobile section -->
    <stickyButtonMobile />
    <!-- ./sticky button mobile section -->

    <!-- breadcrumb section -->
    <section class="section">
      <div class="container">
        <breadcrumbListLayout
          variant="small"
          :items="breadcrumbs"
        ></breadcrumbListLayout>
      </div>
    </section>
    <!-- ./breadcrumb section -->

    <!-- title section only on desktop -->
    <section v-if="$device.isDesktop" class="section is-hidden-mobile">
      <div class="container">
        <!-- components section -->
        <div class="components---section is-clearfix">
          <div class="is-pulled-left">
            <h1 class="section___title">Standard Chartered</h1>
          </div>
        </div>
        <!-- ./components section -->
      </div>
    </section>
    <!-- ./title section only on desktop -->

    <!-- content section -->
    <section class="section spacing-responsive">
      <div class="container">
        <div class="columns is-mobile is-multiline">
          <!-- product image -->
          <div class="column is-12-mobile is-3-tablet is-3-desktop">
            <productImage :image="productImage"></productImage>

            <!-- title only on mobile -->
            <div v-if="$device.isMobile" class="components---section mt-16 mb-0 is-hidden-tablet">
              <div class="has-text-centered">
                <h1 class="section___title">Standard Chartered</h1>
              </div>
            </div>
            <!-- ./title only on mobile -->
          </div>
          <!-- ./product image -->

          <!-- main content -->
          <div class="column is-12-mobile is-6-tablet is-6-desktop">
            <tabsRoundLayout :items="tabsNavs"></tabsRoundLayout>

            <productFeatureLayout :items="features"></productFeatureLayout>

            <productCalcBunga />
          </div>
          <!-- ./main content -->

          <!-- loan simulation -->
          <div class="column is-12-mobile is-3-tablet is-3-desktop">
            <loanSimulation class="is-hidden-mobile" />
          </div>
          <!-- ./loan simulation -->
        </div>
      </div>
    </section>
    <!-- ./content section -->

    <!-- recommendation section -->
    <section class="section mt-16">
      <div class="container">
        <!-- components section -->
        <div class="components---section is-clearfix">
          <div class="is-pulled-left">
            <h2 class="section___title">Rekomendasi pinjaman lainnya</h2>
          </div>
        </div>
        <!-- ./components section -->

        <loanGridLayout :items="loans"></loanGridLayout>
      </div>
    </section>
    <!-- ./recommendation section -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        {
          id: 1,
          title: "home",
          link: "/",
        },
        {
          id: 2,
          title: "Pinjaman",
          link: "loan",
        },
        {
          id: 3,
          title: "Pinjaman online",
          link: "#",
        },
        {
          id: 4,
          title: "Standard Chartered",
          link: "#",
        },
      ],
      productImage: {
        id: 1,
        title: "Standard Chartered",
        image: require("~/assets/img/partner/standardChartered.png"),
      },
      tabsNavs: [
        {
          id: 1,
          title: "Informasi",
          status: "is-active",
        },
        {
          id: 2,
          title: "Rincian biaya",
          status: "",
        },
        {
          id: 3,
          title: "Syarat & dokumen",
          status: "",
        },
      ],
      features: [
        {
          id: 1,
          value: "One line feature text on product detail",
        },
        {
          id: 2,
          value: "One line feature text on product detail",
        },
        {
          id: 3,
          value: "One line feature text on product detail",
        },
        {
          id: 4,
          value: "One line feature text on product detail",
        },
      ],
      loans: [
        {
          id: 1,
          image: require("~/assets/img/partner/standardChartered.png"),
          title: "Standard Chartered",
          pinjaman: "Rp100 juta - Rp300 juta",
          bunga: "0.96% per-bulan",
          tenor: "12 - 36 bulan",
          feature1: "One line feature text on grid",
          feature2: "One line feature text on grid",
          feature3: "One line feature text on grid",
          feature4: "One line feature text on grid",
        },
        {
          id: 2,
          image: require("~/assets/img/partner/standardChartered.png"),
          title: "Standard Chartered",
          pinjaman: "Rp100 juta - Rp300 juta",
          bunga: "0.96% per-bulan",
          tenor: "12 - 36 bulan",
          feature1: "One line feature text on grid",
          feature2: "One line feature text on grid",
          feature3: "One line feature text on grid",
          feature4: "One line feature text on grid",
        },
        {
          id: 3,
          image: require("~/assets/img/partner/standardChartered.png"),
          title: "Standard Chartered",
          pinjaman: "Rp100 juta - Rp300 juta",
          bunga: "0.96% per-bulan",
          tenor: "12 - 36 bulan",
          feature1: "One line feature text on grid",
          feature2: "One line feature text on grid",
          feature3: "One line feature text on grid",
          feature4: "One line feature text on grid",
        },
        {
          id: 4,
          image: require("~/assets/img/partner/standardChartered.png"),
          title: "Standard Chartered",
          pinjaman: "Rp100 juta - Rp300 juta",
          bunga: "0.96% per-bulan",
          tenor: "12 - 36 bulan",
          feature1: "One line feature text on grid",
          feature2: "One line feature text on grid",
          feature3: "One line feature text on grid",
          feature4: "One line feature text on grid",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* mobile screen */
@media screen and (max-width: 576px) {
  /* code */
}

/* horizontal mobile screen */
@media screen and (min-width: 577px) and (max-width: 768px) {
  /* code */
}

/* ipad screen */
@media screen and (min-width: 767px) and (max-width: 992px) {
  /* code */
}

/* ipad pro screen */
@media screen and (min-width: 993px) and (max-width: 1200px) {
  /* code */
}

/* desktop screen */
@media screen and (min-width: 1201px) {
  /* code */

  .spacing-responsive {
    padding-top: 0 !important;
  }
}
</style>
