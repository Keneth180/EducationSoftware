<template>
  <div class="table-container">
    <h2>Agregar notas</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="grupo in Grupos" :key="grupo._id">
          <td>{{ grupo.students }}</td>
          <td>{{ grupo.materia }}</td>
          <td>{{ grupo.codigo }}</td>
          <td>
            <button
              @click.prevent="deleteMateria(materia._id)"
              class="btn btn-danger"
            >
              Eliminar materia
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Grupos: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api/grupos";
    axios
      .get(apiURL)
      .then((res) => {
        this.Materias = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteMateria(id) {
      let apiURL = `http://localhost:4000/api/grupos/delete-grupo/${id}`;
      let indexOfArrayItem = this.Materias.findIndex((i) => i._id === id);

      if (window.confirm("Está seguro que desea eliminar la materia?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Materias.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
.table-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>