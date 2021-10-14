<template>
  <div class="container-father">
    <!-- <div class="container-register">
      <form @submit.prevent="handleSubmitForm">
        <h2>Registrar estudiantes</h2>
        <div class="form-group">
          <label for="name">Nombre completo</label>
          <input
            type="text"
            class="form-control"
            id="name"
            autocomplete="off"
            aria-describedby="nameHelp"
            placeholder="Ingresa tu nombre"
            v-model="student.name"
          />
        </div>
        <div class="form-group">
          <label for="codigo">Código de estudiante</label>
          <input
            type="text"
            class="form-control"
            autocomplete="off"
            id="codigo"
            placeholder="Ingrese su código"
            v-model="student.codigo"
          />
        </div>
        <button type="submit" class="btn btn-primary">Registrar</button>
      </form>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      student: {
        name: "",
        codigo: "",
        nota1: 0,
        nota2: 0,
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-student";

      axios
        .post(apiURL, this.student)
        .then(() => {
          this.$router.push("/estructura-datos");
          this.student = {
            name: "",
            codigo: "",
            nota1: 0,
            nota2: 0,

          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

