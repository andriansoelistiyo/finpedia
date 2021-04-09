<template>
  <div class="components---calc_bunga">
    <div class="calc_bunga___title">Kalkulasi Bunga</div>
    <p class="calc_bunga___paragraph">
      Suku bunga KTA Cicilan Tetap yang akan dikenakan per bulan adalah sesuai
      dengan pilihan jumlah pinjaman kredit sebagai berikut:
    </p>
    <table class="table is-fullwidth is-striped calc_bunga___table">
      <thead>
        <tr>
          <th>Jumlah pinjaman</th>
          <th>Tenor 12 - 24 bulan</th>
          <th>Tenor 27 - 60 bulan</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Rp3 juta - Rp50 juta</td>
          <td>1,59%</td>
          <td>1,69%</td>
        </tr>
        <tr>
          <td>Rp50 juta - Rp100 juta</td>
          <td>1,29%</td>
          <td>1,49%</td>
        </tr>
        <tr>
          <td>Rp100 juta - Rp200 juta</td>
          <td>0,95%</td>
          <td>1,19%</td>
        </tr>
        <tr>
          <td>Rp200 juta - Rp300 juta</td>
          <td>0,65%</td>
          <td>0,95%</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "productCalcBunga",
};
</script>

<style scoped>
/* calc_bunga */
.components---calc_bunga {
  margin-top: 32px;
}
.components---calc_bunga > .calc_bunga___title {
  font-family: finpediaRoboto900;
  color: var(--finpediaBlack01);
}
.components---calc_bunga > .calc_bunga___paragraph {
  font-family: finpediaRoboto400;
  color: var(--finpediaBlack02);
  margin-top: 8px;
}
.components---calc_bunga > .calc_bunga___table {
  font-family: finpediaRoboto400;
  color: var(--finpediaBlack02);
  margin-top: 8px;
}

.components---calc_bunga > .table td,
.table th {
  padding-top: 16px;
  padding-bottom: 16px;
}

/* mobile screen */
@media screen and (max-width: 576px) {
  /* code */

  /* calc_bunga font */
  .components---calc_bunga > .calc_bunga___title {
    font-size: var(--heading05);
    line-height: var(--lhHeading05);
  }
  .components---calc_bunga > .calc_bunga___paragraph {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
  .components---calc_bunga > .calc_bunga___table {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
}

/* horizontal mobile screen */
@media screen and (min-width: 577px) and (max-width: 768px) {
  /* code */

  /* calc_bunga font */
  .components---calc_bunga > .calc_bunga___title {
    font-size: var(--heading05);
    line-height: var(--lhHeading05);
  }
  .components---calc_bunga > .calc_bunga___paragraph {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
  .components---calc_bunga > .calc_bunga___table {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
}

/* ipad screen */
@media screen and (min-width: 767px) and (max-width: 992px) {
  /* code */

  /* calc_bunga font */
  .components---calc_bunga > .calc_bunga___title {
    font-size: var(--heading05);
    line-height: var(--lhHeading05);
  }
  .components---calc_bunga > .calc_bunga___paragraph {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
  .components---calc_bunga > .calc_bunga___table {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
}

/* ipad pro screen */
@media screen and (min-width: 993px) and (max-width: 1200px) {
  /* code */

  /* calc_bunga font */
  .components---calc_bunga > .calc_bunga___title {
    font-size: var(--heading05);
    line-height: var(--lhHeading05);
  }
  .components---calc_bunga > .calc_bunga___paragraph {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
  .components---calc_bunga > .calc_bunga___table {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
}

/* desktop screen */
@media screen and (min-width: 1201px) {
  /* code */

  /* calc_bunga font */
  .components---calc_bunga > .calc_bunga___title {
    font-size: var(--heading05);
    line-height: var(--lhHeading05);
  }
  .components---calc_bunga > .calc_bunga___paragraph {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
  .components---calc_bunga > .calc_bunga___table {
    font-size: var(--body02);
    line-height: var(--lhBody02);
  }
}
</style>