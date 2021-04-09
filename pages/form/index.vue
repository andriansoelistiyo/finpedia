<template>
  <div id="finpedia">
    <section class="section">
      <div class="container">
        <div class="container-form">
          <!-- components section -->
          <div class="components---section is-clearfix">
            <div class="is-pulled-left">
              <h2 class="section___title">Form Pinjaman</h2>
              <span class="section___subtitle"
                >Sebelum melakukan pinjaman, kami perlu tau data diri kamu
                supaya pinjaman ini bisa cepet cair maus ke rekeningmu. Yuk isi
                data diri kamu dengen baik dan benar!</span
              >
            </div>
          </div>
          <!-- ./components section -->

          <!-- form pinjaman -->
          <div class="field is-expanded">
            <label class="label fs-body01">Pinjaman</label>
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

          <!-- form tenor -->
          <div class="field is-expanded">
            <label class="label fs-body01">Tenor</label>
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

          <!-- form provinsi -->
          <div class="field is-expanded">
            <label class="label fs-body01">Kamu tinggal di provinsi mana</label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Pilih provinsi</option>
                  <option>Banten</option>
                  <option>DKI Jakarta</option>
                  <option>Bandung</option>
                  <option>Semarang</option>
                </select>
              </div>
            </div>
            <p class="help">Contoh: DKI Jakarta</p>
          </div>
          <!-- ./form provinsi -->

          <!-- form kota -->
          <div class="field is-expanded">
            <label class="label fs-body01">Di kota mana</label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Pilih provinsi</option>
                  <option>Jakarta Utara</option>
                  <option>Jakarta Timur</option>
                  <option>Jakarta Selatan</option>
                  <option>Jakarta Barat</option>
                </select>
              </div>
            </div>
            <p class="help">Contoh: Jakarta Selatan</p>
          </div>
          <!-- ./form kota -->

          <!-- form pekerjaan -->
          <div class="field is-expanded">
            <label class="label fs-body01">Apa jenis pekerjaan kamu</label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Pilih pekerjaan</option>
                  <option>Karyawan Swasta</option>
                  <option>Wirausaha</option>
                  <option>Ibu Rumah Tangga</option>
                  <option>Pegawai Negri Sipil (PNS)</option>
                </select>
              </div>
            </div>
            <p class="help">Contoh: Karyawan Swasta</p>
          </div>
          <!-- ./form pekerjaan -->

          <!-- form penghasilan -->
          <div class="field is-expanded">
            <label class="label fs-body01"
              >Berapa penghasilan kamu dalam sebulan</label
            >
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static"> Rp </a>
              </p>
              <p class="control is-expanded">
                <input
                  class="input"
                  type="text"
                  placeholder="10.000.000"
                  value="10.000.000"
                />
              </p>
            </div>
            <p class="help">Contoh: 10.000.000</p>
          </div>
          <!-- ./form penghasilan -->

          <div class="field is-expanded">
            <div class="control">
              <button
                class="button is-normal is-rounded is-fullwidth is-info has-text-weight-bold sticky_button_mobile___button-item"
              >
                Ajukan sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-form {
  max-width: 512px;
  margin: 0 auto;
}

.select {
  width: 100%;
}
.select select {
  width: 100%;
}

.sticky_button_mobile___button-item {
  background-color: var(--finpediaBlue04);
  -webkit-transition: -webkit-background-color 0.3s;
  transition: -webkit-background-color 0.3s;
  transition: background-color 0.3s;
}
.sticky_button_mobile___button-item:hover {
  background-color: var(--finpediaBlue03);
}
.sticky_button_mobile___button-item:active {
  background-color: var(--finpediaBlue03);
}
</style>