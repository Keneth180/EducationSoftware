<template>
  <div class="materias-contenedor">
    <h2 id="titular">Materia: Diseño de Interfaces</h2>
        <section>
      <p>
        <b
          >En este apartado administra las notas y estudiantes. En el formulario
          presente a continuación puede registrar estudiantes que ingresan a su
          curso o que por algún motivo no pudo ingresar anteriormente. Debajo
          del formulario encuentra una tabla con la información de los
          estudiantes que están en este curso. Puede notar que en la tabla hay
          dos botones: "Administrar notas" que se encarga de asignar las notas y
          "Eliminar estudiante" que le permitirá eliminar al estudiante de la
          fila de la tabla.</b
        >
      </p>
    </section>
    <div class="container-register">
      <form @submit.prevent="handleSubmitForm">
        <h3>Registro de estudiantes</h3>
        <div class="form-group">
          <label for="name">Nombre completo</label>
          <input
            type="text"
            class="form-control"
            id="name"
            autocomplete="off"
            aria-describedby="nameHelp"
            placeholder="Nombre completo del estudiante"
            v-model="studentDisenio.name"
          />
        </div>
        <div class="form-group">
          <label for="codigo">Código de estudiante</label>
          <input
            type="text"
            class="form-control"
            autocomplete="off"
            id="codigo"
            placeholder="Código del estudiante"
            v-model="studentDisenio.codigo"
          />
        </div>
        <button type="submit" class="btn btn-primary">Registrar</button>
      </form>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nombre completo</th>
          <th scope="col">Código</th>
          <th scope="col">N1</th>
          <th scope="col">N2</th>
          <th scope="col">N3</th>
          <th scope="col">N4</th>
          <th scope="col">Definitiva</th>
          <th scope="col">Actualizar</th>
          <th scope="col">Eliminar estudiante</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="studentDisenio in StudentsDisenio" :key="studentDisenio._id">
          <td>{{ studentDisenio.name }}</td>
          <td>{{ studentDisenio.codigo }}</td>
          <td>{{ studentDisenio.nota1.toFixed(1) }}</td>
          <td>{{ studentDisenio.nota2.toFixed(1) }}</td>
          <td>{{ studentDisenio.nota3 }}</td>
          <td>{{ studentDisenio.nota4 }}</td>
          <td>
            {{
              (studentDisenio.definitiva =
                (studentDisenio.nota1 +
                  studentDisenio.nota2 +
                  studentDisenio.nota3 +
                  studentDisenio.nota4) /
                4).toFixed(1)
            }}
          </td>
          <td>
            <router-link
              :to="{ name: 'edit-disenio', params: { id: studentDisenio._id } }"
              class="btn btn-warning"
              >Administrar notas
            </router-link>
          </td>
          <td>
            <button
              @click.prevent="deleteStudent(studentDisenio._id)"
              class="btn btn-danger"
            >
              Eliminar estudiante
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
      studentDisenio: {
        name: "",
        codigo: "",
        nota1: 0,
        nota2: 0,
        nota3: 0,
        nota4: 0,
        definitiva: 0,
      },
      StudentsDisenio: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api-disenio";
    axios
      .get(apiURL)
      .then((res) => {
        this.StudentsDisenio = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteStudent(id) {
      let apiURL = `http://localhost:4000/api-disenio/delete-student-disenio/${id}`;
      let indexOfArrayItem = this.StudentsDisenio.findIndex(
        (i) => i._id === id
      );

      if (window.confirm("Está seguro que desea eliminar el estudiante?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.StudentsDisenio.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    handleUpdateForm(id) {
      let apiURL = `http://localhost:4000/api-disenio/update-student-disenio/${id}`;

      this.axios
        .put(apiURL, this.studentDisenio)
        .then((res) => {
          console.log(res);
          // this.$router.push("/view");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api-disenio/create-student-disenio";

      axios
        .post(apiURL, this.studentDisenio)
        .then((res) => {
          this.StudentsDisenio.push(res.data);
          this.studentDisenio = {
            name: "",
            codigo: "",
            nota1: 0,
            nota2: 0,
            nota3: 0,
            nota4: 0,
            definitiva: 0,
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
#titular {
  display: flex;
  justify-content: center;
  text-align: center;
  color: black;
}
.container-register {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  justify-content: center;
  margin: auto;
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
  margin-left: 50px;
  margin-right: 50px;
  justify-content: center;
}
.form-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
table,
td,
th {
  border: 1px solid rgb(202, 209, 208);
}

table {
  border-collapse: collapse;
  width: 100%;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

td,
th {
  padding: 3px;
}


thead,
tfoot {
  color: rgb(9, 53, 47);
  background-color: rgb(209, 226, 224);
  font-weight: bolder;
  text-align: center;
}

tbody {
  color: rgb(8, 58, 50);
}

@media only screen and (min-width: 768px) {
  table {
    width: 80%;
    margin: 1em auto 2em;
  }
}
</style>