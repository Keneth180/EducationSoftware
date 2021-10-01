<template>
  <form>
    <div class="form-group">
      <label for="name">Nombre completo</label>
      <input
        type="text"
        class="form-control"
        id="name"
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
        id="codigo"
        placeholder="Ingrese su código"
        v-model="student.codigo"
      />
    </div>
    <button type="submit" class="btn btn-primary">Registrar</button>
  </form>
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
.form-control {
  margin-top: 5px;
}
label {
  margin-top: 10px;
}
button {
  padding: 5px;
  margin-top: 10px;
}
</style>
