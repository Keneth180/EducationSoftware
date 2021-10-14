<template>
  <div class="materias-contenedor">
    <h2 id="titular">Estructura de Datos</h2>
    <form @submit.prevent="handleUpdateForm">
      <div class="form-group">
        <label>Nota #1</label>
        <input
          type="number"
          class="form-control"
          min="0"
          max="5"
          step="0.01"
          v-model="student.nota1"
        />
      </div>

      <div class="form-group">
        <label>Nota #2</label>
        <input
          type="number"
          class="form-control"
          min="0"
          max="5"
          step="0.01"
          v-model="student.nota2"
        />
      </div>

      <div class="form-group">
        <label>Nota #3</label>
        <input
          type="number"
          class="form-control"
          min="0"
          max="5"
          step="0.01"
          v-model="student.nota3"
        />
      </div>

      <div class="form-group">
        <label>Nota #4</label>
        <input
          type="number"
          class="form-control"
          min="0"
          max="5"
          step="0.01"
          v-model="student.nota4"
        />
      </div>

      <div class="form-group">
        <button class="btn btn-danger btn-block">Guardar cambios</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      student: {},
      Students: [],
    };
  },
  created() {
    let apiURLVista = "http://localhost:4000/api";
    axios
      .get(apiURLVista)
      .then((res) => {
        this.Students = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    let apiURL = `http://localhost:4000/api/edit-student/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.student = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4000/api/update-student/${this.$route.params.id}`;

      axios
        .put(apiURL, this.student)
        .then((res) => {
          console.log(res);
          this.$router.push("/estructura-datos");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>