<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="~/assets/img/logo/finpediaLogo.png" />
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
          <a href="/loan" class="navbar-item"> Pinjaman </a>
          <a href="/loan" class="navbar-item"> Kartu Kredit </a>
          <a href="#" class="navbar-item"> Simulasi KTA </a>
          <a href="#" class="navbar-item"> Artikel </a>
          <a href="#" class="navbar-item">
            <figure
              class="image is-flex is-justify-content-center is-align-items-center"
            >
              <img
                class="is-rounded"
                src="https://via.placeholder.com/28x28"
                style="width: 24px; height: 24px"
              />
              <span class="navbar-item"> Andrian Soelistiyo </span>
            </figure>
          </a>
          <a href="#" class="navbar-item"> <i class="fas fa-search"></i> </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "finpediaHeader",
};
</script>
