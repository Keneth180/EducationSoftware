<template>
  <div class="table-container">
    <form @submit.prevent="handleSubmitForm">
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
          <tr>
            <td >
              <input type="number" placeholder="Nota 1" v-model="notas.nota1" />
            </td>
            <td>
              <input type="number" placeholder="Nota 2" v-model="notas.nota2" />
            </td>
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
      <button type="submit" class="btn btn-primary">Guardar cambios</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      notas: {
        nota1: "",
        nota2: "",
      },
      Notas: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api/notas/";
    axios
      .get(apiURL)
      .then((res) => {
        this.Notas = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/notas/create-nota";

      axios
        .post(apiURL, this.notas)
        .then(() => {
          this.notas = {
            nota1: "",
            nota2: "",
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
.table-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>