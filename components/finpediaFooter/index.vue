<template>
  <footer>
    <section class="section bg-finpediaBlack01">
      <div class="container">
        <div class="columns is-mobile is-multiline">
          <div class="column is-12-mobile is-4-tablet is-3-desktop">
            <div class="components---footer">
              <div class="footer___title">Hubungi kami</div>
              <ul class="footer___items">
                <li class="footer___items-item">
                  Co-Hive Sahid Sudirman Residence,<br />
                  Jl. Jend. Sudirman No.86, RT 10/RW 11,<br />
                  Kel. Karet Tengsin, Kec. Tanah Abang,<br />
                  Jakarta Pusat, Indonesia
                </li>
              </ul>
            </div>
          </div>
          <div class="column is-12-mobile is-4-tablet is-3-desktop">
            <div class="components---footer">
              <div class="footer___title">Finpedia</div>
              <ul class="footer___items">
                <li class="footer___items-item">
                  <a href="#">Sejarah dan Profile Perusahaan</a>
                </li>
                <li class="footer___items-item">
                  <a href="#">Susunan Management Perusahaan</a>
                </li>
              </ul>
            </div>
            <div class="components---footer mt-32">
              <div class="footer___title">Legal</div>
              <ul class="footer___items">
                <li class="footer___items-item">
                  <a href="#">Syarat dan Ketentuan</a>
                </li>
                <li class="footer___items-item">
                  <a href="#">Kebijakan Privasi</a>
                </li>
                <li class="footer___items-item">
                  <a href="#">Disclaimer</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="column is-12-mobile is-4-tablet is-3-desktop">
            <div class="components---footer">
              <div class="footer___title">Download apps</div>
              <ul class="footer___items">
                <li class="footer___items-item">
                  <figure class="image">
                    <img
                      class="footer___image"
                      src="~/assets/img/logo/googlePlay.png"
                      alt="footer"
                    />
                  </figure>
                </li>
              </ul>
            </div>
            <div class="components---footer mt-32">
              <div class="footer___title">Ikuti kami</div>
              <ul class="footer___items">
                <li class="footer___items-item">
                  <figure class="image is-inline-block">
                    <img
                      class="footer___socialMedia"
                      src="~/assets/img/socialMedia/facebook.png"
                      alt="footer"
                    />
                  </figure>
                  <figure class="image is-inline-block">
                    <img
                      class="footer___socialMedia"
                      src="~/assets/img/socialMedia/linkedin.png"
                      alt="footer"
                    />
                  </figure>
                  <figure class="image is-inline-block">
                    <img
                      class="footer___socialMedia"
                      src="~/assets/img/socialMedia/instagram.png"
                      alt="footer"
                    />
                  </figure>
                  <figure class="image is-inline-block">
                    <img
                      class="footer___socialMedia"
                      src="~/assets/img/socialMedia/twitter.png"
                      alt="footer"
                    />
                  </figure>
                </li>
              </ul>
            </div>
          </div>
          <div class="column is-12-mobile is-4-tablet is-3-desktop">
            <div class="components---footer">
              <div class="footer___title">Diatur dan diawasi oleh</div>
              <ul class="footer___items">
                <li class="footer___items-item">
                  <figure class="image is-inline-block mr-16 py-8">
                    <img
                      class="footer___image"
                      src="~/assets/img/logo/bankIndonesia.png"
                      alt="footer"
                    />
                  </figure>
                  <figure class="image is-inline-block mr-16 py-8">
                    <img
                      class="footer___image"
                      src="~/assets/img/logo/ojk.png"
                      alt="footer"
                    />
                  </figure>
                  <figure class="image is-inline-block mr-16 py-8">
                    <img
                      class="footer___image"
                      src="~/assets/img/logo/fintechIndonesia.png"
                      alt="footer"
                    />
                  </figure>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'finpediaFooter',
}
</script>

<style scoped>
.components---footer > .footer___title {
  font-family: finpediaRoboto900;
  font-size: var(--body01);
  line-height: var(--lhBody01);
}

.components---footer > .footer___items {
  margin-top: 16px;
}
.components---footer > .footer___items > .footer___items-item:first-child {
  margin-top: 0;
  font-family: finpediaRoboto400;
  font-size: var(--body02);
  line-height: var(--lhBody02);
}
.components---footer > .footer___items > .footer___items-item {
  margin-top: 8px;
  font-family: finpediaRoboto400;
  font-size: var(--body02);
  line-height: var(--lhBody02);
}
.components---footer > .footer___items > .footer___items-item:last-child {
  margin-top: 8px;
  font-family: finpediaRoboto400;
  font-size: var(--body02);
  line-height: var(--lhBody02);
}

.components---footer > .footer___items > .footer___items-item > a {
  color: #fff;
}
.components---footer > .footer___items > .footer___items-item > a:hover {
  color: var(--finpediaBlack05);
  text-decoration: underline;
}

.components---footer
  > .footer___items
  > .footer___items-item
  > figure
  > .footer___socialMedia {
  height: 40px;
  width: 40px;
  border-radius: 100%;
  margin-right: 8px;
}

.components---footer
  > .footer___items
  > .footer___items-item
  > figure
  > .footer___image {
  height: 48px;
  width: auto;
  border-radius: var(--smallradius);
}
</style>