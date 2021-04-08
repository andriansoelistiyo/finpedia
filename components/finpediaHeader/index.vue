<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
          />
        </a>

        <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item"> Pinjaman </a>

          <a class="navbar-item"> Kartu Kredit </a>

          <a class="navbar-item"> Simulasi KTA </a>

          <a class="navbar-item"> Artikel </a>

          <a class="navbar-item">
            <figure class="image is-128x128 is-flex is-justify-content-center is-align-items-center">
              <img class="is-rounded" src="https://via.placeholder.com/28x28" style="width: 30px; height: 30px;">
              <span class="navbar-item"> Andrian</span>
            </figure>
          </a>

          <a class="navbar-item">   <i class="fas fa-search "></i> </a>



        </div>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'finpediaHeader'
}
</script>
