<template>
  <div id="finpedia">
    <!-- Popup -->
    <popup :active="popupActive" @closed="setPopup(false)" v-if="$device.isMobile" class="is-hidden-tablet"/>
    
    <!-- slick carousel section -->
    <section class="section">
      <div class="container">
        <slickCarousel />
      </div>
    </section>
    <!-- ./slick carousel section -->

    <!-- category section -->
    <section class="section">
      <div class="container">
        <!-- components section -->
        <div class="components---section is-clearfix">
          <div class="is-pulled-left">
            <h2 class="section___title">Penuhi kebutuhan finansialmu</h2>
            <span class="section___subtitle"
              >Mulai dari kartu kredit, KTA, sampai produk investasi.</span
            >
          </div>
          <!-- button show more only on desktop -->
          <div class="is-pulled-right">
            <a
              href="#"
              class="button is-small is-rounded is-info is-light has-text-weight-bold fs-button"
            >
              Lihat semua kategori
            </a>
          </div>
          <!-- ./button show more only on desktop -->
        </div>
        <!-- ./components section -->

        <categoryGridLayout :items="categories"></categoryGridLayout>

        <!-- button show more only on mobile -->
        <div class="has-text-centered is-hidden-tablet mt-16">
          <button
            @click="setPopup(true)"
            class="button is-normal is-rounded is-info is-light has-text-weight-bold"
          >
            Lihat semua kategori
          </button>
        </div>
        <!-- ./button show more only on mobile -->
      </div>
    </section>
    <!-- ./category section -->

    <!-- loan section -->
    <section class="section">
      <div class="container">
        <!-- components section -->
        <div class="components---section is-clearfix">
          <div class="is-pulled-left">
            <h2 class="section___title">Produk pinjaman terbaik</h2>
          </div>
          <!-- button show more only on desktop -->
          <div class="is-pulled-right">
            <a
              href="#"
              class="button is-small is-rounded is-info is-light has-text-weight-bold fs-button"
            >
              Lihat semua pinjaman
            </a>
          </div>
          <!-- ./button show more only on desktop -->
        </div>
        <!-- ./components section -->

        <tabsRoundLayout :items="tabsLoans"></tabsRoundLayout>

        <loanGridLayout :items="loans"></loanGridLayout>

        <!-- button show more only on mobile -->
        <div class="has-text-centered is-hidden-tablet mt-16">
          <a
            href="#"
            class="button is-normal is-rounded is-info is-light has-text-weight-bold"
          >
            Lihat semua pinjaman
          </a>
        </div>
        <!-- ./button show more only on mobile -->
      </div>
    </section>
    <!-- ./loan section -->

    <!-- cc section -->
    <section class="section">
      <div class="container">
        <!-- components section -->
        <div class="components---section is-clearfix">
          <div class="is-pulled-left">
            <h2 class="section___title">Produk kartu kredit terbaik</h2>
          </div>
          <!-- button show more only on desktop -->
          <div class="is-pulled-right">
            <a
              href="#"
              class="button is-small is-rounded is-info is-light has-text-weight-bold fs-button"
            >
              Lihat semua kartu kredit
            </a>
          </div>
          <!-- ./button show more only on desktop -->
        </div>
        <!-- ./components section -->

        <tabsRoundLayout :items="tabsCcs"></tabsRoundLayout>

        <ccGridLayout :items="ccs"></ccGridLayout>

        <!-- button show more only on mobile -->
        <div class="has-text-centered is-hidden-tablet mt-16">
          <a
            href="#"
            class="button is-normal is-rounded is-info is-light has-text-weight-bold"
          >
            Lihat semua kartu kredit
          </a>
        </div>
        <!-- ./button show more only on mobile -->
      </div>
    </section>
    <!-- ./cc section -->

    <!-- partner section -->
    <section class="section">
      <div class="container">
        <!-- components section -->
        <div class="components---section is-clearfix">
          <div class="is-pulled-left">
            <h2 class="section___title">Partner terbaik kami</h2>
            <span class="section___subtitle"
              >Bekerja sama dengan berbagai institusi finansial dalam
              menghadirkan produk terbaik untuk kamu.</span
            >
          </div>
          <!-- button show more only on desktop -->
          <div class="is-pulled-right">
            <a
              href="#"
              class="button is-small is-rounded is-info is-light has-text-weight-bold fs-button"
            >
              Lihat semua partner
            </a>
          </div>
          <!-- ./button show more only on desktop -->
        </div>
        <!-- ./components section -->

        <partnerGridLayout :items="partners"></partnerGridLayout>

        <!-- button show more only on mobile -->
        <div class="has-text-centered is-hidden-tablet mt-16">
          <a
            href="#"
            class="button is-normal is-rounded is-info is-light has-text-weight-bold"
          >
            Lihat semua partner
          </a>
        </div>
        <!-- ./button show more only on mobile -->
      </div>
    </section>
    <!-- ./partner section -->

    <valueProposition />
  </div>
</template>

<script>
export default {
  data() {
    return {
      popupActive: false,
      categories: [
        {
          id: "1",
          image: require("~/assets/img/category/pinjamanOnline.png"),
          title: "Pinjaman Online",
          link: "loan",
        },
        {
          id: "2",
          image: require("~/assets/img/category/shopping.png"),
          title: "Shopping",
          link: "cc",
        },
        {
          id: "3",
          image: require("~/assets/img/category/kreditTanpaAgunan.png"),
          title: "Kredit Tanpa Agunan",
          link: "loan",
        },
        {
          id: "4",
          image: require("~/assets/img/category/kreditKendaraanBermotor.png"),
          title: "Kredit Kendaraan Bermotor",
          link: "loan",
        },
        {
          id: "5",
          image: require("~/assets/img/category/kreditPemilikanRumah.png"),
          title: "Kredit Pemilikan Rumah",
          link: "loan",
        },
        {
          id: "6",
          image: require("~/assets/img/category/syariah.png"),
          title: "Syariah",
          link: "cc",
        },
      ],
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
      tabsCcs: [
        {
          id: 1,
          title: "Shopping",
        },
        {
          id: 2,
          title: "Cash back",
        },
        {
          id: 3,
          title: "Syariah",
        },
        {
          id: 4,
          title: "Promo BBM",
        },
        {
          id: 5,
          title: "Travel",
        },
        {
          id: 6,
          title: "Lifestyle",
        },
      ],
      ccs: [
        {
          id: 1,
          image: require("~/assets/img/cc/bniMastercardGold.jpeg"),
          title: "BNI Master Card Gold",
          tahunan: "Rp300 ribu",
          tambahan: "Rp100 ribu",
          feature1: "One line feature text on grid",
          feature2: "One line feature text on grid",
        },
        {
          id: 2,
          image: require("~/assets/img/cc/bniMastercardGold.jpeg"),
          title: "BNI Master Card Gold",
          tahunan: "Rp300 ribu",
          tambahan: "Rp100 ribu",
          feature1: "One line feature text on grid",
          feature2: "One line feature text on grid",
        },
        {
          id: 3,
          image: require("~/assets/img/cc/bniMastercardGold.jpeg"),
          title: "BNI Master Card Gold",
          tahunan: "Rp300 ribu",
          tambahan: "Rp100 ribu",
          feature1: "One line feature text on grid",
          feature2: "One line feature text on grid",
        },
        {
          id: 4,
          image: require("~/assets/img/cc/bniMastercardGold.jpeg"),
          title: "BNI Master Card Gold",
          tahunan: "Rp300 ribu",
          tambahan: "Rp100 ribu",
          feature1: "One line feature text on grid",
          feature2: "One line feature text on grid",
        },
      ],
      partners: [
        {
          id: "1",
          image: require("~/assets/img/partner/standardChartered.png"),
          title: "Standard Chartered",
        },
        {
          id: "2",
          image: require("~/assets/img/partner/standardChartered.png"),
          title: "Standard Chartered",
        },
        {
          id: "3",
          image: require("~/assets/img/partner/standardChartered.png"),
          title: "Standard Chartered",
        },
        {
          id: "4",
          image: require("~/assets/img/partner/standardChartered.png"),
          title: "Standard Chartered",
        },
        {
          id: "5",
          image: require("~/assets/img/partner/standardChartered.png"),
          title: "Standard Chartered",
        },
        {
          id: "6",
          image: require("~/assets/img/partner/standardChartered.png"),
          title: "Standard Chartered",
        },
      ],
    };
  },
  methods: {
    setPopup(status) {
      this.popupActive = status;
    }
  }
};
</script>