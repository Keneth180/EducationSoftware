<template>
  <div class="app">
    <!-- Nav bar -->
    <div class="navbar-color">
      <nav
        class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row"
      >
        <div class="container">
          <a class="navbar-brand float-left">Education Software</a>
          <ul class="nav navbar-nav flex-row float-right">
            <li class="nav-item">
              <router-link class="nav-link pr-3" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register-students"
                >Registrar Estudiantes</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register"
                >Registrar notas</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/inform"
                >Informe de notas</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>

    <!-- Footer -->
    <footer class="bg-light text-center text-lg-start">
      <!-- Copyright -->
      <div
        class="text-center p-3"
        style="background-color: rgba(0, 0, 0, 0.2);"
      >
        © 2021 Education Software
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300&display=swap");
body .app {
  height: 100vh;
  line-height: 1.3em;
  font-family: "Noto Sans Display", sans-serif;
}
nav {
  padding-bottom: 30px !important;
}

nav.bg-primary {
  background-color: #0b0940 !important;
}
h2 {
  display: flex;
  flex-direction: row;
  align-content: center;
  color: rgb(255, 255, 255);
  font-size: 1.2em;
}
p {
  display: flex;
  justify-content: center;
  font-size: 1em;
}
.main-nav > li {
  display: flex;
  justify-content: center;
}
.nav-item {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
}
.container-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
}
footer {
  padding-top: 100px;
}
footer.bg-light {
  margin-top: 500px;
  background-color: #010326 !important;
}
footer.text-center,
.text-start {
  color: #f8f8ff;
}
@media screen and (min-width: 1200px) {
  body {
    overflow: auto;
  }
}
</style>
