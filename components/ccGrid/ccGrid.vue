<template>
  <div class="components---cc">
    <a href="/product-detail">
      <figure class="image">
        <img class="cc___image" :src="cc.image" :alt="cc.title" />
      </figure>
      <h3 class="cc___title">
        {{ cc.title }}
      </h3>
      <div class="cc___sk">
        <!-- biaya tahunan -->
        <div class="cc___sk-item is-clearfix">
          <div class="cc___sk-item-value is-clearfix">
            <span class="cc___sk-item-value-left is-pulled-left"
              >Biaya tahunan</span
            >
            <span class="cc___sk-item-value-right is-pulled-right">{{
              cc.tahunan
            }}</span>
          </div>
          <div class="cc___sk-item-divider"></div>
        </div>
        <!-- ./biaya tahunan -->
        <!-- biaya kartu tambahan -->
        <div class="cc___sk-item is-clearfix">
          <div class="cc___sk-item-value is-clearfix">
            <span class="cc___sk-item-value-left is-pulled-left"
              >Kartu tambahan</span
            >
            <span class="cc___sk-item-value-right is-pulled-right">{{
              cc.tambahan
            }}</span>
          </div>
          <div class="cc___sk-item-divider"></div>
        </div>
        <!-- ./biaya kartu tambahan -->
      </div>
      <div class="cc___feature">
        <div class="cc___feature-title">Fitur</div>
        <div class="cc___feature-item">
          <i class="far fa-check-circle color-success"></i> {{ cc.feature1 }}
        </div>
        <div class="cc___feature-item">
          <i class="far fa-check-circle color-success"></i> {{ cc.feature2 }}
        </div>
      </div>
    </a>
    <div class="cc___button">
      <a
        href="/product-detail"
        class="button is-normal is-rounded is-fullwidth is-info has-text-weight-bold cc___button-item"
      >
        Ajukan sekarang
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ccGrid',
  props: {
    cc: {
      type: Object,
      require: true,
    },
  },
}
</script>

<style scoped>
/* cc card */
.components---cc {
  border-radius: var(--smallRadius);
  background-color: var(--white);
  color: var(--finpediaBlack01);
  -webkit-transition: -webkit-box-shadow 0.3s;
  transition: -webkit-box-shadow 0.3s;
  transition: box-shadow 0.3s;
}
.components---cc {
  padding: 16px;
  -webkit-box-shadow: var(--shadow);
  box-shadow: var(--shadow);
}
.components---cc:hover {
  -webkit-box-shadow: var(--shadowHover);
  box-shadow: var(--shadowHover);
}

/* cc image */
.components---cc > a > figure {
  border-radius: var(--smallRadius);
  background-color: var(--finpediaBlack06);
  padding-top: 8px;
  padding-bottom: 8px;
}

.components---cc > a > figure > .cc___image {
  border-radius: var(--smallRadius);
  max-height: 100px;
  width: auto;
  margin: 0 auto;
}

/* cc title */
.components---cc > a > .cc___title {
  font-family: finpediaPoppins700;
  color: var(--finpediaBlack01);
  text-align: center;
  margin-top: 16px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-wrap: break-word;
  overflow: hidden;
}

/* cc sk */
.cc___sk {
  margin-top: 16px;
}
.cc___sk > .cc___sk-item:first-child {
  margin-top: 0;
}
.cc___sk > .cc___sk-item {
  margin-top: 8px;
}
.cc___sk > .cc___sk-item:last-child {
  margin-top: 8px;
}
.cc___sk-item
  > .cc___sk-item-value
  > .cc___sk-item-value-left {
  font-family: finpediaRoboto400;
  color: var(--finpediaBlack02);
}
.cc___sk-item
  > .cc___sk-item-value
  > .cc___sk-item-value-right {
  font-family: finpediaRoboto500;
  color: var(--finpediaBlue04);
}
.cc___sk-item > .cc___sk-item-divider {
  border-bottom: 1px solid var(--finpediaBlack06);
  margin-top: 8px;
}

/* cc feature */
.cc___feature {
  margin-top: 16px;
}
.cc___feature > .cc___feature-title {
  font-family: finpediaRoboto900;
  color: var(--finpediaBlack01);
}
.cc___feature > .cc___feature-item {
  font-family: finpediaRoboto400;
  color: var(--finpediaBlack02);
  margin-top: 8px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  word-wrap: break-word;
  overflow: hidden;
}

/* cc button */
.cc___button {
  margin-top: 16px;
}
.cc___button > .cc___button-item {
  background-color: var(--finpediaBlue04);
  -webkit-transition: -webkit-background-color 0.3s;
  transition: -webkit-background-color 0.3s;
  transition: background-color 0.3s;
}
.cc___button > .cc___button-item:hover {
  background-color: var(--finpediaBlue03);
}
.cc___button > .cc___button-item:active {
  background-color: var(--finpediaBlue03);
}

/* mobile screen */
@media screen and (max-width: 576px) {
  /* code */

  /* cc font */
  .components---cc > a > .cc___title {
    font-size: var(--body02);
    line-height: var(--lhBody02);
    height: 42px;
  }

  /* cc sk font */
  .cc___sk-item > .cc___sk-item-value {
    font-size: var(--body03);
    line-height: var(--lhBody03);
  }

  /* cc feature font */
  .cc___feature > .cc___feature-title {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
  .cc___feature > .cc___feature-item {
    font-size: var(--body03);
    line-height: var(--lhBody03);
  }
}

/* horizontal mobile screen */
@media screen and (min-width: 577px) and (max-width: 768px) {
  /* code */

  /* cc font */
  .components---cc > a > .cc___title {
    font-size: var(--body02);
    line-height: var(--lhBody02);
    height: 42px;
  }

  /* cc sk font */
  .cc___sk-item > .cc___sk-item-value {
    font-size: var(--body03);
    line-height: var(--lhBody03);
  }

  /* cc feature font */
  .cc___feature > .cc___feature-title {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
  .cc___feature > .cc___feature-item {
    font-size: var(--body03);
    line-height: var(--lhBody03);
  }
}

/* ipad screen */
@media screen and (min-width: 767px) and (max-width: 992px) {
  /* code */

  /* cc font */
  .components---cc > a > .cc___title {
    font-size: var(--body01);
    line-height: var(--lhBody01);
    height: 48px;
  }

  /* cc sk font */
  .cc___sk-item > .cc___sk-item-value {
    font-size: var(--body03);
    line-height: var(--lhBody03);
  }

  /* cc feature font */
  .cc___feature > .cc___feature-title {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
  .cc___feature > .cc___feature-item {
    font-size: var(--body03);
    line-height: var(--lhBody03);
  }
}

/* ipad pro screen */
@media screen and (min-width: 993px) and (max-width: 1200px) {
  /* code */

  /* cc font */
  .components---cc > a > .cc___title {
    font-size: var(--body01);
    line-height: var(--lhBody01);
    height: 48px;
  }

  /* cc sk font */
  .cc___sk-item > .cc___sk-item-value {
    font-size: var(--body03);
    line-height: var(--lhBody03);
  }

  /* cc feature font */
  .cc___feature > .cc___feature-title {
    font-size: var(--body03);
    line-height: var(--lhBody03);
  }
  .cc___feature > .cc___feature-item {
    font-size: var(--body03);
    line-height: var(--lhBody03);
  }
}

/* desktop screen */
@media screen and (min-width: 1201px) {
  /* code */

  /* cc font */
  .components---cc > a > .cc___title {
    font-size: var(--body01);
    line-height: var(--lhBody01);
    height: 48px;
  }

  /* cc sk font */
  .cc___sk-item > .cc___sk-item-value {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }

  /* cc feature font */
  .cc___feature > .cc___feature-title {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
  .cc___feature > .cc___feature-item {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
}
</style>