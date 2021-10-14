<template>
  <div class="materias-contenedor">
    <h2 id="titular">Diseño de Interfaces</h2>
    <form @submit.prevent="handleUpdateForm">
      <div class="form-group">
        <label>Nota #1</label>
        <input
          type="number"
          class="form-control"
          min="0"
          max="5"
          step="0.01"
          v-model="studentDisenio.nota1"
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
          v-model="studentDisenio.nota2"
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
          v-model="studentDisenio.nota3"
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
          v-model="studentDisenio.nota4"
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
      studentDisenio: {},
      StudentsDisenio: [],
    };
  },
  created() {
    let apiURLVista = "http://localhost:4000/api-disenio";
    axios
      .get(apiURLVista)
      .then((res) => {
        this.StudentsDisenio = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    let apiURL = `http://localhost:4000/api-disenio/edit-student-disenio/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.studentDisenio = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4000/api-disenio/update-student-disenio/${this.$route.params.id}`;

      axios
        .put(apiURL, this.studentDisenio)
        .then((res) => {
          console.log(res);
          this.$router.push("/disenio-interfaces");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>