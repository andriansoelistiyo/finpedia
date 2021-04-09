<template>
  <div :class="['popup', activeClass]">
    <div class="popup__overlay" @click="$emit('closed')"></div>

    <div class="popup__content-wrapper">
      <button class="popup__btn-close" @click="$emit('closed')">
        <i class="fas fa-times"></i>
      </button>

      <div class="popup__card">
        <!-- components section -->
        <div class="components---section is-clearfix">
          <div class="is-pulled-left">
            <h2 class="section___title">Pinjaman</h2>
          </div>
          <!-- button show more only on desktop -->
          <div class="is-pulled-right has-text-weight-bold is-block fs-body02">
            <a href="#"> Lihat semua </a>
          </div>
          <!-- ./button show more only on desktop -->
        </div>
        <!-- ./components section -->
        <categoryGridLayout :items="categories"></categoryGridLayout>

        <!-- components section -->
        <div class="components---section is-clearfix">
          <div class="is-pulled-left">
            <h2 class="section___title">Kartu kredit</h2>
          </div>
          <!-- button show more only on desktop -->
          <div class="is-pulled-right has-text-weight-bold is-block fs-body02">
            <a href="#"> Lihat semua </a>
          </div>
          <!-- ./button show more only on desktop -->
        </div>
        <!-- ./components section -->
        <categoryGridLayout :items="categories"></categoryGridLayout>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup",
  props: {
    active: Boolean,
  },
  data() {
    return {
      activeClass: "",
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
    };
  },
  methods: {
    setClass() {
      if (this.active) {
        this.activeClass = "d-flex";
        setTimeout(() => {
          this.activeClass += " active";
        }, 10);
        return;
      }
      this.activeClass = "d-flex";
      setTimeout(() => {
        this.activeClass = "";
      }, 250);
    },
  },
  watch: {
    // Will executed every changed on active state changed its value
    active: function (val, oldVal) {
      this.setClass();
    },
  },
};
</script>

<style scoped>
.popup {
  display: none;
  align-items: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 999;
}

.d-flex {
  display: flex;
}

.popup__content-wrapper {
  width: 100%;
  /* max-height: 65%; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transform: translateY(100%);
  transition: 0.25s transform ease;
}
.popup.active .popup__content-wrapper {
  transform: translateY(0);
}

.popup__overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: 0.25s opacity ease;
}
.popup.active .popup__overlay {
  opacity: 1;
}
.popup__card {
  position: relative;
  max-height: 80vh;
  width: 100%;
  margin-top: 16px;
  padding: 32px 16px 16px;
  background-color: #fff;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow-y: auto;
}
.popup__btn-close {
  position: relative;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  font-size: 24px;
  border: none;
  border-radius: 50%;
  outline: none;
}
.popup__btn-close:active {
  transform: scale(1.1);
}
</style>
