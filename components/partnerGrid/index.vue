<template>
  <a href="#">
    <div class="components---partner">
      <figure class="image">
        <img
          class="partner___image"
          :src="partner.image"
          :alt="partner.title"
        />
      </figure>
      <h3 class="partner___title">{{ partner.title }}</h3>
    </div>
  </a>
</template>

<script>
export default {
  name: 'partnerGrid',
  props: {
    partner: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
/* partner card */
.components---partner {
  border-radius: var(--mediumRadius);
  background-color: var(--white);
  text-align: center;
  color: var(--finpediaBlack01);
  -webkit-transition: -webkit-box-shadow 0.3s;
  transition: -webkit-box-shadow 0.3s;
  transition: box-shadow 0.3s;
}

/* partner image */
.components---partner > figure > .partner___image {
  border-radius: var(--smallRadius);
  margin: 0 auto;
}

/* partner title */
.components---partner > .partner___title {
  font-family: finpediaRoboto400;
  margin-top: 8px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  word-wrap: break-word;
  overflow: hidden;
}

/* mobile screen */
@media screen and (max-width: 576px) {
  /* code */

  /* partner card */
  .components---partner {
    padding: 8px;
    -webkit-box-shadow: var(--shadow);
    box-shadow: var(--shadow);
  }
  .components---partner:hover {
    -webkit-box-shadow: var(--shadowHover);
    box-shadow: var(--shadowHover);
  }

  /* partner font */
  .components---partner > .partner___title {
    font-size: var(--body03);
    line-height: var(--lhBody03);
  }
}

/* horizontal mobile screen */
@media screen and (min-width: 577px) and (max-width: 768px) {
  /* code */

  /* partner card */
  .components---partner {
    padding: 16px;
    -webkit-box-shadow: var(--shadow);
    box-shadow: var(--shadow);
  }
  .components---partner:hover {
    -webkit-box-shadow: var(--shadowHover);
    box-shadow: var(--shadowHover);
  }

  /* partner font */
  .components---partner > .partner___title {
    font-size: var(--body03);
    line-height: var(--lhBody03);
  }
}

/* ipad screen */
@media screen and (min-width: 767px) and (max-width: 992px) {
  /* code */

  /* partner card */
  .components---partner {
    padding: 16px;
    -webkit-box-shadow: var(--shadow);
    box-shadow: var(--shadow);
  }
  .components---partner:hover {
    -webkit-box-shadow: var(--shadowHover);
    box-shadow: var(--shadowHover);
  }

  /* partner font */
  .components---partner > .partner___title {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
}

/* ipad pro screen */
@media screen and (min-width: 993px) and (max-width: 1200px) {
  /* code */

  /* partner card */
  .components---partner {
    padding: 16px;
    -webkit-box-shadow: var(--shadow);
    box-shadow: var(--shadow);
  }
  .components---partner:hover {
    -webkit-box-shadow: var(--shadowHover);
    box-shadow: var(--shadowHover);
  }

  /* partner font */
  .components---partner > .partner___title {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
}

/* desktop screen */
@media screen and (min-width: 1201px) {
  /* code */

  /* partner card */
  .components---partner {
    padding: 16px;
    -webkit-box-shadow: var(--shadow);
    box-shadow: var(--shadow);
  }
  .components---partner:hover {
    -webkit-box-shadow: var(--shadowHover);
    box-shadow: var(--shadowHover);
  }

  /* partner font */
  .components---partner > .partner___title {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
}
</style>