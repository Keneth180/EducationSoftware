<template>
  <div class="materias-contenedor">
    <h2 id="titular">Programación II</h2>
    <form @submit.prevent="handleUpdateForm">
      <div class="form-group">
        <label>Nota #1</label>
        <input
          type="number"
          class="form-control"
          min="0"
          max="5"
          step="0.01"
          v-model="studentProg.nota1"
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
          v-model="studentProg.nota2"
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
          v-model="studentProg.nota3"
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
          v-model="studentProg.nota4"
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
      studentProg: {},
      StudentsProg: [],
    };
  },
  created() {
    let apiURLVista = "https://education-software.herokuapp.com/api-prog";
    axios
      .get(apiURLVista)
      .then((res) => {
        this.StudentsProg = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    let apiURL = `https://education-software.herokuapp.com/api-prog/edit-student-prog/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.studentProg = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `https://education-software.herokuapp.com/api-prog/update-student-prog/${this.$route.params.id}`;

      axios
        .put(apiURL, this.studentProg)
        .then((res) => {
          console.log(res);
          this.$router.push("/programacion");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>