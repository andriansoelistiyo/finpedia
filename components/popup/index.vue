<template>

  <div :class="['popup', activeClass]">
    <div class="popup__overlay" @click="$emit('closed')"></div>
    
    <div class="popup__content-wrapper">
      <button class="popup__btn-close" @click="$emit('closed')">
        <span>x</span>
      </button>
  
      <div class="popup__card">
        <div>
          <p>Testing</p>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "popup",
  props: {
    active: Boolean
  },
  data() {
    return {
      activeClass: ""
    }
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
    }
  }
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
    max-height: 65%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    transform: translateY(100%);
    transition: .25s transform ease;
  }
  .popup.active .popup__content-wrapper {
    transform: translateY(0);
  }

  .popup__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    opacity: 0;
    transition: .25s opacity ease;
  }
  .popup.active .popup__overlay {
    opacity: 1;
  }
  .popup__card {
    position: relative;
    max-height: 70%;
    width: 100%;
    margin-top: 10px;
    padding: 1em;
    background-color: #fff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    overflow-y: auto;
  }
  .popup__btn-close {
    position: relative;
    right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 35px;
    font-size: 22px;
    border: none;
    border-radius: 50%;
    outline: none;
  }
  .popup__btn-close:active {
    transform: scale(1.1) ;
  }
</style>