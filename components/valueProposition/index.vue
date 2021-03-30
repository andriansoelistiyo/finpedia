<template>
  <section class="section bg-finpediaBlack02 mt-32">
    <div class="container">
      <!-- components section -->
      <div class="components---section">
        <div class="has-text-centered">
          <h2 class="section___title-footer">Keunggulan finpedia</h2>
        </div>
      </div>
      <!-- ./components section -->

      <div>
        <div class="columns is-mobile is-multiline is-justify-content-center">
          <div class="column is-6-mobile is-4-tablet is-2-desktop">
            <!-- components value -->
            <a href="#">
              <div class="components---value">
                <figure class="image">
                  <img
                    class="value___image"
                    src="~/assets/img/value/value1.png"
                    alt="value"
                  />
                </figure>
                <h3 class="value___title">
                  Produk keuangan <br />
                  bervariasi dan lengkap
                </h3>
              </div>
            </a>
            <!-- ./components value -->
          </div>

          <div class="column is-6-mobile is-4-tablet is-2-desktop">
            <!-- components value -->
            <a href="#">
              <div class="components---value">
                <figure class="image">
                  <img
                    class="value___image"
                    src="~/assets/img/value/value2.png"
                    alt="value"
                  />
                </figure>
                <h3 class="value___title">Proses cepat dan mudah</h3>
              </div>
            </a>
            <!-- ./components value -->
          </div>

          <div class="column is-6-mobile is-4-tablet is-2-desktop">
            <!-- components value -->
            <a href="#">
              <div class="components---value">
                <figure class="image">
                  <img
                    class="value___image"
                    src="~/assets/img/value/value3.png"
                    alt="value"
                  />
                </figure>
                <h3 class="value___title">
                  Layanan customer <br />
                  service
                </h3>
              </div>
            </a>
            <!-- ./components value -->
          </div>

          <div class="column is-6-mobile is-4-tablet is-2-desktop">
            <!-- components value -->
            <a href="#">
              <div class="components---value">
                <figure class="image">
                  <img
                    class="value___image"
                    src="~/assets/img/value/value4.png"
                    alt="value"
                  />
                </figure>
                <h3 class="value___title">Tercatat di OJK</h3>
              </div>
            </a>
            <!-- ./components value -->
          </div>

          <div class="column is-6-mobile is-4-tablet is-2-desktop">
            <!-- components value -->
            <a href="#">
              <div class="components---value">
                <figure class="image">
                  <img
                    class="value___image"
                    src="~/assets/img/value/value5.png"
                    alt="value"
                  />
                </figure>
                <h3 class="value___title">Anggota AFTECH</h3>
              </div>
            </a>
            <!-- ./components value -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'valueProposition',
}
</script>

<style scoped>
/* value card */
.components---value {
  border-radius: var(--mediumRadius);
  background-color: var(--white);
  text-align: center;
  color: var(--finpediaBlack01);
  -webkit-transition: -webkit-box-shadow 0.3s;
  transition: -webkit-box-shadow 0.3s;
  transition: box-shadow 0.3s;
}

/* value image */
.components---value > figure > .value___image {
  border-radius: 100%;
  margin: 0 auto;
}

/* value title */
.components---value > .value___title {
  font-family: finpediaRoboto400;
  margin-top: 8px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-wrap: break-word;
  overflow: hidden;
}

/* mobile screen */
@media screen and (max-width: 576px) {
  /* code */

  /* value image */
  .components---value > figure > .value___image {
    height: 72px;
    width: 72px;
  }

  /* value card */
  .components---value {
    padding: 8px;
    -webkit-box-shadow: var(--shadow);
    box-shadow: var(--shadow);
  }
  .components---value:hover {
    -webkit-box-shadow: var(--shadowHover);
    box-shadow: var(--shadowHover);
  }

  /* value font */
  .components---value > .value___title {
    font-size: var(--body03);
    line-height: var(--lhBody03);
    height: 36px;
  }
}

/* horizontal mobile screen */
@media screen and (min-width: 577px) and (max-width: 768px) {
  /* code */

  /* value image */
  .components---value > figure > .value___image {
    height: 72px;
    width: 72px;
  }

  /* value card */
  .components---value {
    padding: 8px;
    -webkit-box-shadow: var(--shadow);
    box-shadow: var(--shadow);
  }
  .components---value:hover {
    -webkit-box-shadow: var(--shadowHover);
    box-shadow: var(--shadowHover);
  }

  /* value font */
  .components---value > .value___title {
    font-size: var(--body03);
    line-height: var(--lhBody03);
    height: 36px;
  }
}

/* ipad screen */
@media screen and (min-width: 767px) and (max-width: 992px) {
  /* code */

  /* value image */
  .components---value > figure > .value___image {
    height: 72px;
    width: 72px;
  }

  /* value card */
  .components---value {
    padding: 16px;
    -webkit-box-shadow: var(--shadow);
    box-shadow: var(--shadow);
  }
  .components---value:hover {
    -webkit-box-shadow: var(--shadowHover);
    box-shadow: var(--shadowHover);
  }

  /* value font */
  .components---value > .value___title {
    font-size: var(--body02);
    line-height: var(--lhBody02);
    height: 42px;
  }
}

/* ipad pro screen */
@media screen and (min-width: 993px) and (max-width: 1200px) {
  /* code */

  /* value image */
  .components---value > figure > .value___image {
    height: 72px;
    width: 72px;
  }

  /* value card */
  .components---value {
    padding: 16px;
    -webkit-box-shadow: var(--shadow);
    box-shadow: var(--shadow);
  }
  .components---value:hover {
    -webkit-box-shadow: var(--shadowHover);
    box-shadow: var(--shadowHover);
  }

  /* value font */
  .components---value > .value___title {
    font-size: var(--body02);
    line-height: var(--lhBody02);
    height: 42px;
  }
}

/* desktop screen */
@media screen and (min-width: 1201px) {
  /* code */

  /* value image */
  .components---value > figure > .value___image {
    height: 88px;
    width: 88px;
  }

  /* value card */
  .components---value {
    padding: 16px;
    -webkit-box-shadow: var(--shadow);
    box-shadow: var(--shadow);
  }
  .components---value:hover {
    -webkit-box-shadow: var(--shadowHover);
    box-shadow: var(--shadowHover);
  }

  /* value font */
  .components---value > .value___title {
    font-size: var(--body02);
    line-height: var(--lhBody02);
    height: 42px;
  }
}
</style>