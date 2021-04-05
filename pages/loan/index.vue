<template>
  <div id="finpedia-loan" class="py-16">
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

    <!-- hero image section -->
    <section class="section">
      <div class="container">
        <heroImage :image="heroImage"></heroImage>
      </div>
    </section>
    <!-- ./hero image section -->

    <!-- content section -->
    <section class="section">
      <div class="container">
        <div class="columns is-mobile is-multiline">
          <div class="column is-3-desktop"></div>
          <div class="column is-12-mobile is-9-desktop">
            <div>
              <tabsRoundLayout :items="tabsLoans"></tabsRoundLayout>

              <loanGridMultiline :items="loans"></loanGridMultiline>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ./content section -->
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
          link: "#",
        },
      ],
      heroImage: {
        id: 1,
        title: "banner",
        image: require("~/assets/img/bannerCarousel/banner1.jpeg"),
      },
      tabsLoans: [
        {
          id: 1,
          title: "Pinjaman online",
        },
        {
          id: 2,
          title: "Kredit tanpa agunan",
        },
        {
          id: 3,
          title: "Kredit kendaraan bermotor",
        },
        {
          id: 4,
          title: "Kredit pemilikan rumah",
        },
        {
          id: 5,
          title: "Kredit multiguna",
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
          image: require("~/assets/img/partner/julo.png"),
          title: "Julo",
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
          image: require("~/assets/img/partner/julo.png"),
          title: "Julo",
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
          image: require("~/assets/img/partner/julo.png"),
          title: "Julo",
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
          image: require("~/assets/img/partner/julo.png"),
          title: "Julo",
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
