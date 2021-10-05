<template>
  <div class="container-father">
    <div class="container-register">
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
    </div>
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
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-student";

      axios
        .post(apiURL, this.student)
        .then(() => {
          this.$router.push("/register");
          this.student = {
            name: "",
            codigo: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
h2{
  text-align: center;
  color: black;
}
.container-register {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  height: 500px;
  justify-content: center;
  background-color: rgb(184, 185, 187);
  border: 1px solid black;
}
.form-control {
  margin-top: 5px;
}
button {
  margin-bottom: 15px;
}
label {
  margin-top: 10px;
}
button {
  padding: 5px;
  margin-top: 10px;
}
form {
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  margin-right: 200px;
  justify-content: center;
}
.form-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
</style>
