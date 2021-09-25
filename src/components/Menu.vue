<template>
  <!-- Display Menú App -->
  <div class="container">
    <!-- <header class="header">
      <div class="container">
        <div class="btn-menu">
          <label for="btn-menu">☰</label>
        </div>
        <div class="logo">
          <h1>Education Software</h1>
        </div>
        <nav class="menu">
          <a href="#">Inicio</a>
          <a href="#">Nosotros</a>
        </nav>
      </div>
    </header> -->
    <div class="capa"></div>
    <!--	--------------->
    <input type="checkbox" id="btn-menu" />
    <div class="container-menu">
      <div class="cont-menu">
        <nav>
          <router-link to="/registrar">Registrar notas </router-link>
          <router-link to="/registrar">Actualizar notas </router-link>
          <!-- <a href="#">Suscribirse</a>
          <a href="#">Facebook</a>
          <a href="#">Youtube</a>
          <a href="#">Instagram</a> -->
        </nav>
        <div class="container mt-5">
          <router-view></router-view>
        </div>
        <label for="btn-menu">✖️</label>
      </div>
    </div>

    <main>
      <h2>Bienvenido al sistema Education Software</h2>
      <div class="box">
        <router-link to="/registrar">
          <h3>Estrcutura de datos</h3>
          <h4>Código:233</h4>
          <h4>Universidad X</h4>
        </router-link>
      </div>
      <div class="box">
        <a href="">
          <h3>Programación</h3>
          <h4>Universidad X</h4>
        </a>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
body {
  background: url("../assets/educacion.jpg");
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
}
main h2 {
  margin-top: 50px;
  color: #fff;
}
.box {
  display: flex;
  flex-direction: row;
  border: 1px solid white;
  border-radius: 5px;
  justify-content: center;
  align-content: center;
  margin-left: 150px;
  margin-right: 150px;
  margin-top: 50px;
  background: rgba(255, 255, 255, 0.795);
}
.box > a {
  text-decoration: none;
}
.capa {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(35, 37, 134, 0.6);
  z-index: -1;
  top: 0;
  left: 0;
}
/*Estilos para el encabezado*/
.header {
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
}
.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}
.container .btn-menu,
.logo {
  float: left;
  line-height: 100px;
}
.container .btn-menu label {
  color: #fff;
  font-size: 25px;
  cursor: pointer;
}
.logo h1 {
  color: #fff;
  font-weight: 400;
  font-size: 22px;
  margin-left: 10px;
}
.container .menu {
  float: right;
  line-height: 100px;
}
.container .menu a {
  display: inline-block;
  padding: 15px;
  line-height: normal;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
  font-size: 15px;
  margin-right: 5px;
}
.container .menu a:hover {
  border-bottom: 2px solid #c7c7c7;
  padding-bottom: 5px;
}
/*Fin de Estilos para el encabezado*/

/*Menù lateral*/
#btn-menu {
  display: none;
}
.container-menu {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  transition: all 500ms ease;
  opacity: 0;
  visibility: hidden;
}
#btn-menu:checked ~ .container-menu {
  opacity: 1;
  visibility: visible;
}
.cont-menu {
  width: 100%;
  max-width: 250px;
  background: #3c3ad6;
  height: 100vh;
  position: relative;
  transition: all 500ms ease;
  transform: translateX(-100%);
}
#btn-menu:checked ~ .container-menu .cont-menu {
  transform: translateX(0%);
}
.cont-menu nav {
  transform: translateY(15%);
}
.cont-menu nav a {
  display: block;
  text-decoration: none;
  padding: 20px;
  color: #c7c7c7;
  border-left: 5px solid transparent;
  transition: all 400ms ease;
}
.cont-menu nav a:hover {
  border-left: 5px solid #c7c7c7;
  background: #1f1f1f;
}
.cont-menu label {
  position: absolute;
  right: 5px;
  top: 10px;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
}
/*Fin de Menù lateral*/
</style>
