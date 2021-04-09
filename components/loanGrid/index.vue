<template>
  <div class="components---loan">
    <a href="/product-detail">
      <figure class="image">
        <img
          class="loan___image img-fluid"
          :src="loan.image"
          :alt="loan.title"
        />
      </figure>
      <h3 class="loan___title">{{ loan.title }}</h3>
      <div class="loan___sk">
        <!-- total loan -->
        <div class="loan___sk-item">
          <div class="loan___sk-item-value is-clearfix">
            <span class="loan___sk-item-value-left is-pulled-left"
              >Pinjaman</span
            >
            <span class="loan___sk-item-value-right is-pulled-right">{{
              loan.pinjaman
            }}</span>
          </div>
          <div class="loan___sk-item-divider"></div>
        </div>
        <!-- ./total loan -->
        <!-- suku bunga -->
        <div class="loan___sk-item">
          <div class="loan___sk-item-value is-clearfix">
            <span class="loan___sk-item-value-left is-pulled-left"
              >Suku bunga</span
            >
            <span class="loan___sk-item-value-right is-pulled-right">{{
              loan.bunga
            }}</span>
          </div>
          <div class="loan___sk-item-divider"></div>
        </div>
        <!-- ./suku bunga -->
        <!-- tenor -->
        <div class="loan___sk-item">
          <div class="loan___sk-item-value is-clearfix">
            <span class="loan___sk-item-value-left is-pulled-left"
              >Tenor</span
            >
            <span class="loan___sk-item-value-right is-pulled-right">{{
              loan.tenor
            }}</span>
          </div>
          <div class="loan___sk-item-divider"></div>
        </div>
        <!-- ./tenor -->
      </div>
      <div class="loan___feature">
        <div class="loan___feature-title">Fitur</div>
        <div class="loan___feature-item">
          <i class="far fa-check-circle color-success"></i>
          {{ loan.feature1 }}
        </div>
        <div class="loan___feature-item">
          <i class="far fa-check-circle color-success"></i>
          {{ loan.feature2 }}
        </div>
        <div class="loan___feature-item">
          <i class="far fa-check-circle color-success"></i>
          {{ loan.feature3 }}
        </div>
        <div class="loan___feature-item">
          <i class="far fa-check-circle color-success"></i>
          {{ loan.feature4 }}
        </div>
      </div>
    </a>
    <div class="loan___button">
      <a
        href="/product-detail"
        class="button is-normal is-rounded is-fullwidth is-info has-text-weight-bold loan___button-item"
      >
        Ajukan pinjaman
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loanGrid',
  props: {
    loan: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
/* loan card */
.components---loan {
  border-radius: var(--smallRadius);
  background-color: var(--white);
  color: var(--finpediaBlack01);
  -webkit-transition: -webkit-box-shadow 0.3s;
  transition: -webkit-box-shadow 0.3s;
  transition: box-shadow 0.3s;
}
.components---loan {
  padding: 16px;
  -webkit-box-shadow: var(--shadow);
  box-shadow: var(--shadow);
}
.components---loan:hover {
  -webkit-box-shadow: var(--shadowHover);
  box-shadow: var(--shadowHover);
}

/* loan image */
.components---loan > a > figure {
  border-radius: var(--smallRadius);
  background-color: var(--finpediaBlack06);
  padding-top: 8px;
  padding-bottom: 8px;
}

.components---loan > a > figure > .loan___image {
  border-radius: var(--smallRadius);
  max-height: 100px;
  width: auto;
  margin: 0 auto;
}

/* loan title */
.components---loan > a > .loan___title {
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

/* loan sk */
.loan___sk {
  margin-top: 16px;
}
.loan___sk > .loan___sk-item:first-child {
  margin-top: 0;
}
.loan___sk > .loan___sk-item {
  margin-top: 8px;
}
.loan___sk > .loan___sk-item:last-child {
  margin-top: 8px;
}
.loan___sk-item
  > .loan___sk-item-value
  > .loan___sk-item-value-left {
  font-family: finpediaRoboto400;
  color: var(--finpediaBlack02);
}
.loan___sk-item
  > .loan___sk-item-value
  > .loan___sk-item-value-right {
  font-family: finpediaRoboto500;
  color: var(--finpediaBlue04);
}
.loan___sk-item > .loan___sk-item-divider {
  border-bottom: 1px solid var(--finpediaBlack06);
  margin-top: 8px;
}

/* loan feature */
.loan___feature {
  margin-top: 16px;
}
.loan___feature > .loan___feature-title {
  font-family: finpediaRoboto900;
  color: var(--finpediaBlack01);
}
.loan___feature > .loan___feature-item {
  font-family: finpediaRoboto400;
  color: var(--finpediaBlack02);
  margin-top: 8px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  word-wrap: break-word;
  overflow: hidden;
}

/* loan button */
.loan___button {
  margin-top: 16px;
}
.loan___button > .loan___button-item {
  background-color: var(--finpediaBlue04);
  -webkit-transition: -webkit-background-color 0.3s;
  transition: -webkit-background-color 0.3s;
  transition: background-color 0.3s;
}
.loan___button > .loan___button-item:hover {
  background-color: var(--finpediaBlue03);
}
.loan___button > .loan___button-item:active {
  background-color: var(--finpediaBlue03);
}

/* mobile screen */
@media screen and (max-width: 576px) {
  /* code */

  /* loan font */
  .components---loan > a > .loan___title {
    font-size: var(--body02);
    line-height: var(--lhBody02);
    height: 42px;
  }

  /* loan sk font */
  .loan___sk-item > .loan___sk-item-value {
    font-size: var(--body03);
    line-height: var(--lhBody03);
  }

  /* loan feature font */
  .loan___feature > .loan___feature-title {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
  .loan___feature > .loan___feature-item {
    font-size: var(--body03);
    line-height: var(--lhBody03);
  }
}

/* horizontal mobile screen */
@media screen and (min-width: 577px) and (max-width: 768px) {
  /* code */

  /* loan font */
  .components---loan > a > .loan___title {
    font-size: var(--body02);
    line-height: var(--lhBody02);
    height: 42px;
  }

  /* loan sk font */
  .loan___sk-item > .loan___sk-item-value {
    font-size: var(--body03);
    line-height: var(--lhBody03);
  }

  /* loan feature font */
  .loan___feature > .loan___feature-title {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
  .loan___feature > .loan___feature-item {
    font-size: var(--body03);
    line-height: var(--lhBody03);
  }
}

/* ipad screen */
@media screen and (min-width: 767px) and (max-width: 992px) {
  /* code */

  /* loan font */
  .components---loan > a > .loan___title {
    font-size: var(--body01);
    line-height: var(--lhBody01);
    height: 48px;
  }

  /* loan sk font */
  .loan___sk-item > .loan___sk-item-value {
    font-size: var(--body03);
    line-height: var(--lhBody03);
  }

  /* loan feature font */
  .loan___feature > .loan___feature-title {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
  .loan___feature > .loan___feature-item {
    font-size: var(--body03);
    line-height: var(--lhBody03);
  }
}

/* ipad pro screen */
@media screen and (min-width: 993px) and (max-width: 1200px) {
  /* code */

  /* loan font */
  .components---loan > a > .loan___title {
    font-size: var(--body01);
    line-height: var(--lhBody01);
    height: 48px;
  }

  /* loan sk font */
  .loan___sk-item > .loan___sk-item-value {
    font-size: var(--body03);
    line-height: var(--lhBody03);
  }

  /* loan feature font */
  .loan___feature > .loan___feature-title {
    font-size: var(--body03);
    line-height: var(--lhBody03);
  }
  .loan___feature > .loan___feature-item {
    font-size: var(--body03);
    line-height: var(--lhBody03);
  }
}

/* desktop screen */
@media screen and (min-width: 1201px) {
  /* code */

  /* loan font */
  .components---loan > a > .loan___title {
    font-size: var(--body01);
    line-height: var(--lhBody01);
    height: 48px;
  }

  /* loan sk font */
  .loan___sk-item > .loan___sk-item-value {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }

  /* loan feature font */
  .loan___feature > .loan___feature-title {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
  .loan___feature > .loan___feature-item {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
}
</style>