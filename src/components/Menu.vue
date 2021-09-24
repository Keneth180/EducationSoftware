<template>
  <!-- Display Menú App -->
  <div class="container">
    <header>
      <nav>
        <ul class="main-nav">
          <li>
            <a href="">Registro de notas</a>
          </li>
          <li>
            <a href="">Actualización de notas</a>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <h2>Bienvenido al sistema Education Software</h2>
      <div class="box">
        <a href="">
          <h3>Estrcutura de datos</h3>
          <h4>Universidad X</h4>
        </a>
      </div>
      <div class="box">
        <a href="">
          <h3>Programación</h3>
          <h4>Universidad X</h4>
        </a>
      </div>
    </main>
    <footer>&#169; EducationSoftware.com Terms of use Privacy</footer>
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
template .container {
  height: 100vh;
  font-family: "Montserrat", sans-serif;
  font-size: 1.1em;
  line-height: 1.5em;
}

template {
  overflow-y: hidden;
}

h2 {
  text-align: center;
  align-items: center;
}

header {
  flex: 0 0 auto;
  height: 100px;
  display: flex;
  justify-content: center;
  background-color: rgb(71, 140, 219);
}

.container {
  display: flex;
  flex-direction: column;
}

.container main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
  position: relative;
  overflow-y: auto;
}

.container nav {
  text-align: center;
  padding: 10px;
  margin-bottom: 25px;
}

.main-nav {
  list-style: none;
}

.main-nav li > a {
  text-decoration: none;
  color: antiquewhite;
}

.box {
  border: 1px solid black;
  border-radius: 8px;
  margin-bottom: 10px;
  text-align: center;
  background-color: rgb(177, 177, 243);
}

.box > a {
  text-decoration: none;
}

.box > a:hover {
  color: rgb(113, 113, 160);
}

.container footer {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: gray;
  padding: 40px;
}

.title-header-footer {
  color: aliceblue;
}

@media screen and (min-width: 640px) {
  main {
    display: flex;
  }

  .box {
    margin: 0 250px 25px 250px;
  }
  header {
    justify-content: flex-end;
  }

  .main-nav {
    display: flex;
    flex-direction: row;
  }

  .main-nav li > a {
    justify-content: flex-start;
    margin-right: 10px;
    background-color: #c2c8d1;
    padding: 5px;
    border-radius: 13px;
    color: aliceblue;
  }

  .main-nav > li > a:hover {
    background-color: rgb(71, 140, 219);
  }
}
</style>
