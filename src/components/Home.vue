<template>
  <div class="container-main">
    <div class="boton-cerrar">
      <button class="btn-danger" @click="cerrarSesion">Cerrar sesión</button>
    </div>

    <section>
      <h3>Bienvenido</h3>
      <p>
        <b>En este software encontrará los cursos que dicta para que pueda
        realizar modificaciones y ver informes de estos. En los contenedores que encuentra a continuación, puede ingresar y administrar el registro de los estudiantes
        de su curso y las notas correspondientes.</b>
      </p>
    </section>

    <div class="materias">
      <div class="card" style="width: 18rem">
        <img
          class="card-img-top"
          src="../assets/logo.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Estructura de Datos</h5>
          <p class="card-text">
            Esta materia te permitirá manejar la lógica de los datos de un
            programa y te abrirá las puertas a las bases de datos
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Docente: Juan Alberto</li>
          <li class="list-group-item">Código: 12300</li>
          <li class="list-group-item">Universidad X</li>
        </ul>
        <div class="card-body">
          <router-link class="nav-link pr-3" to="/estructura-datos"
            >Ingresar</router-link
          >
        </div>
      </div>

      <div class="card" style="width: 18rem">
        <img
          class="card-img-top"
          src="../assets/logo.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Programación I</h5>
          <p class="card-text">
            Esta es la puerta al mundo de la ingeniería en sistemas. Aquí
            aprenderás la lógica y las bases necesarias
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Docente: Juan Alberto</li>
          <li class="list-group-item">Código: 15400</li>
          <li class="list-group-item">Universidad X</li>
        </ul>
        <div class="card-body">
          <router-link class="nav-link pr-3" to="/programacion"
            >Ingresar</router-link
          >
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img
          class="card-img-top"
          src="../assets/logo.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Diseño de interfaces</h5>
          <p class="card-text">
            El diseño de una web es fundamental, por eso aquí te preparamos para
            que seas el mejor en este aspecto
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Docente: Juan Alberto</li>
          <li class="list-group-item">Código: 13450</li>
          <li class="list-group-item">Universidad X</li>
        </ul>
        <div class="card-body">
          <router-link class="nav-link pr-3" to="/disenio-interfaces"
            >Ingresar</router-link
          >
        </div>
      </div>
    </div>
    <main></main>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    var autenticacion = window.localStorage.getItem("autenticacion");
    console.log("Autenticacion esta " + autenticacion);
    if (autenticacion !== "ok") {
      this.$router.push({ path: "/" });
    }
  },
  methods: {
    cerrarSesion() {
      window.localStorage.removeItem("autenticacion");
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
.card {
  margin: auto;
  box-shadow: 10px 5px 5px #0b0940;
}
.card:hover {
  box-shadow: -10px -5px 5px #0b0940;
}
p{
  color: black;
}

.materias {
  display: flex;
  flex-wrap: wrap;
}
.card-link {
  text-decoration: none;
}
.container-main {
  display: flex;
  justify-content: center;
}
h3 {
  color: #0b0940;
  text-align: center;
}
section {
  background-color: rgb(233, 197, 197);
  border-radius: 3px;
  margin-bottom: 20px;
  box-shadow: 10px 5px 5px #0b0940;
}
.boton-cerrar{
  display: flex;
  justify-content: center;
}
button{
  width: 50%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
}

@media screen and (min-width: 786px) {
  .materias {
    display: flex;
    justify-content: space-between;
  }
}
</style>
