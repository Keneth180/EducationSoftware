<template>
  <div class="app">
    <header>
      <div class="navbar-color">
        <nav
          class="
            navbar navbar-dark
            bg-primary
            justify-content-between
            flex-nowrap flex-row
          "
        >
          <div class="container">
            <a class="navbar-brand float-left">Education Software</a>
            <ul class="nav navbar-nav flex-row float-right">
              <li class="nav-item">
                <router-link class="nav-link pr-3" to="/">Inicio</router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/inform"
                  >Informe general</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/register-students"
                  >Iniciar Sesión</router-link
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

    <div class="container-main mt-5">
      <router-view></router-view>
    </div>

    <footer class="bg-light text-center text-lg-start">
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2021 Education Software
      </div>
    </footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300&display=swap");
.app {
  height: 80vh;
  line-height: 1.3em;
  font-family: "Noto Sans Display", sans-serif;
}
nav {
  padding-bottom: 30px !important;
}
a.nav-link {
  color: rgb(2, 2, 2) !important;
  padding: 10px;
  border-radius: 4px;
  background-color: rgb(230, 207, 207);

}
a.nav-link:hover {
  background-color: #0b0940;
  color: white !important;
}
nav.bg-primary {
  background-color: #0b0940 !important;
  margin: auto !important;
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
  margin: 50px;
  justify-content: center;
  margin-top: 10px;
}
footer {
  padding-top: 100px;
}
footer.bg-light {
  margin-top: 50px;
  background-color: #010326 !important;
}
footer.text-center,
.text-start {
  color: #f8f8ff;
}
</style>
