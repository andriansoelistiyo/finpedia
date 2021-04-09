<template>
  <div class="components---loan_simulation">
    <div
      v-if="$device.isDesktop"
      class="loan_simulation___title is-hidden-mobile"
    >
      Simulasi pinjaman
    </div>

    <div class="columns is-mobile is-multiline">
      <div class="column is-6-mobile is-6-tablet is-12-desktop">
        <!-- form pinjaman -->
        <div class="field is-expanded">
          <label class="label fs-body02">Pinjaman</label>
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static"> Rp </a>
            </p>
            <p class="control is-expanded">
              <input
                class="input"
                type="text"
                placeholder="100.000.000"
                value="100.000.000"
              />
            </p>
          </div>
          <p class="help">Hingga Rp300 juta</p>
        </div>
        <!-- ./form pinjaman -->
      </div>
      <div class="column is-6-mobile is-6-tablet is-12-desktop">
        <!-- form tenor -->
        <div class="field">
          <label class="label fs-body02">Tenor</label>
          <div class="control">
            <div class="select">
              <select>
                <option>Pilih tenor</option>
                <option>3 bulan</option>
                <option>6 bulan</option>
                <option>9 bulan</option>
                <option>12 bulan</option>
              </select>
            </div>
          </div>
          <p class="help">Hingga 36 bulan</p>
        </div>
        <!-- ./form tenor -->
      </div>
    </div>

    <!-- suku bunga -->
    <div class="loan_simulation___suku_bunga">
      Suku bunga <strong>0.65% per–bulan</strong>
    </div>
    <!-- ./suku bunga -->

    <!-- paid period -->
    <div class="loan_simulation___paid_period">
      <div class="loan_simulation___paid_period-static">
        Pembayaran per–bulan
      </div>
      <div class="loan_simulation___paid_period-value">Rp10.000.000</div>
    </div>
    <!-- ./paid period -->

    <!-- button primary -->
    <div class="loan_simulation___button is-hidden-mobile">
      <a
        href="#"
        class="button is-normal is-rounded is-fullwidth is-info has-text-weight-bold loan_simulation___button-item"
      >
        Ajukan sekarang
      </a>
    </div>
    <!-- ./button primary -->
  </div>
</template>

<script>
export default {
  name: "loanSimulation",
};
</script>

<style scoped>
.components---loan_simulation > .loan_simulation___title {
  font-family: finpediaRoboto900;
  color: var(--finpediaBlack01);
  margin-bottom: 16px;
}

.select {
  width: 100%;
}
.select select {
  width: 100%;
}

.components---loan_simulation > .loan_simulation___suku_bunga {
  font-family: finpediaRoboto400;
  color: var(--finpediaBlack02);
}

.components---loan_simulation > .loan_simulation___paid_period {
  padding: 8px;
  border: 1px solid var(--finpediaBlue04);
  border-radius: var(--smallRadius);
}
.components---loan_simulation
  > .loan_simulation___paid_period
  > .loan_simulation___paid_period-static {
  font-family: finpediaRoboto400;
  color: var(--finpediaBlue04);
  margin-bottom: 4px;
}
.components---loan_simulation
  > .loan_simulation___paid_period
  > .loan_simulation___paid_period-value {
  font-family: finpediaRoboto900;
  color: var(--finpediaBlue04);
}

/* button */
.loan_simulation___button {
  margin-top: 16px;
}
.loan_simulation___button > .loan_simulation___button-item {
  background-color: var(--finpediaBlue04);
  -webkit-transition: -webkit-background-color 0.3s;
  transition: -webkit-background-color 0.3s;
  transition: background-color 0.3s;
}
.loan_simulation___button > .loan_simulation___button-item:hover {
  background-color: var(--finpediaBlue03);
}
.loan_simulation___button > .loan_simulation___button-item:active {
  background-color: var(--finpediaBlue03);
}

/* mobile screen */
@media screen and (max-width: 576px) {
  /* code */

  .components---loan_simulation {
    padding: 16px 0 0;
  }

  .components---loan_simulation > .loan_simulation___title {
    font-size: var(--body01);
    line-height: var(--lhBody01);
  }

  .components---loan_simulation > .loan_simulation___suku_bunga {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }

  .components---loan_simulation > .loan_simulation___paid_period {
    margin-top: 8px;
  }

  .components---loan_simulation
    > .loan_simulation___paid_period
    > .loan_simulation___paid_period-static {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
  .components---loan_simulation
    > .loan_simulation___paid_period
    > .loan_simulation___paid_period-value {
    font-size: var(--heading05);
    line-height: var(--lhHeading05);
  }
}

/* horizontal mobile screen */
@media screen and (min-width: 577px) and (max-width: 768px) {
  /* code */

  .components---loan_simulation {
    padding: 16px 0 0;
  }

  .components---loan_simulation > .loan_simulation___title {
    font-size: var(--body01);
    line-height: var(--lhBody01);
  }

  .components---loan_simulation > .loan_simulation___suku_bunga {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }

  .components---loan_simulation > .loan_simulation___paid_period {
    margin-top: 8px;
  }

  .components---loan_simulation
    > .loan_simulation___paid_period
    > .loan_simulation___paid_period-static {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
  .components---loan_simulation
    > .loan_simulation___paid_period
    > .loan_simulation___paid_period-value {
    font-size: var(--heading05);
    line-height: var(--lhHeading05);
  }
}

/* ipad screen */
@media screen and (min-width: 767px) and (max-width: 992px) {
  /* code */

  .components---loan_simulation {
    padding: 16px 0 0;
  }

  .components---loan_simulation > .loan_simulation___title {
    font-size: var(--body01);
    line-height: var(--lhBody01);
  }

  .components---loan_simulation > .loan_simulation___suku_bunga {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }

  .components---loan_simulation > .loan_simulation___paid_period {
    margin-top: 8px;
  }

  .components---loan_simulation
    > .loan_simulation___paid_period
    > .loan_simulation___paid_period-static {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
  .components---loan_simulation
    > .loan_simulation___paid_period
    > .loan_simulation___paid_period-value {
    font-size: var(--heading05);
    line-height: var(--lhHeading05);
  }
}

/* ipad pro screen */
@media screen and (min-width: 993px) and (max-width: 1200px) {
  /* code */

  .components---loan_simulation {
    padding: 16px;
    border-radius: var(--smallRadius);
    box-shadow: var(--shadow);
    background-color: #fff;
  }

  .components---loan_simulation > .loan_simulation___title {
    font-size: var(--body01);
    line-height: var(--lhBody01);
  }

  .components---loan_simulation > .loan_simulation___suku_bunga {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }

  .components---loan_simulation > .loan_simulation___paid_period {
    margin-top: 16px;
  }

  .components---loan_simulation
    > .loan_simulation___paid_period
    > .loan_simulation___paid_period-static {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
  .components---loan_simulation
    > .loan_simulation___paid_period
    > .loan_simulation___paid_period-value {
    font-size: var(--heading05);
    line-height: var(--lhHeading05);
  }
}

/* desktop screen */
@media screen and (min-width: 1201px) {
  /* code */

  .components---loan_simulation {
    padding: 16px;
    border-radius: var(--smallRadius);
    box-shadow: var(--shadow);
    background-color: #fff;
  }

  .components---loan_simulation > .loan_simulation___title {
    font-size: var(--body01);
    line-height: var(--lhBody01);
  }

  .components---loan_simulation > .loan_simulation___suku_bunga {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }

  .components---loan_simulation > .loan_simulation___paid_period {
    margin-top: 16px;
  }

  .components---loan_simulation
    > .loan_simulation___paid_period
    > .loan_simulation___paid_period-static {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
  .components---loan_simulation
    > .loan_simulation___paid_period
    > .loan_simulation___paid_period-value {
    font-size: var(--heading05);
    line-height: var(--lhHeading05);
  }
}
</style>