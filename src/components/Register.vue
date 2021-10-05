<template>
  <main>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nombre completo</th>
          <th scope="col">Código</th>
          <th scope="col">Agregar notas</th>
          <th scope="col">Editar notas</th>
          <th scope="col">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in Students" :key="student._id">
          <td>{{ student.name }}</td>
          <td>{{ student.codigo }}</td>
          <td>
            <router-link
              :to="{ name: 'add', params: { id: student._id } }"
              class="btn btn-success"
              >Agregar notas
            </router-link>
          </td>
          <td>
            <router-link
              :to="{ name: 'edit', params: { id: student._id } }"
              class="btn btn-warning"
              >Editar notas
            </router-link>
          </td>
          <td>
            <button
              @click.prevent="deleteStudent(student._id)"
              class="btn btn-danger"
            >
              Eliminar estudiante
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      Students: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.Students = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteStudent(id) {
      let apiURL = `http://localhost:4000/api/delete-student/${id}`;
      let indexOfArrayItem = this.Students.findIndex((i) => i._id === id);

      if (window.confirm("Está seguro que desea eliminar el estudiante?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Students.splice(indexOfArrayItem, 1);
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
</style>
