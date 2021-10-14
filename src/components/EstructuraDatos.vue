<template>
  <div class="materias-contenedor">
    <h2 id="titular">Materia: Estructura de Datos</h2>
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
      <h3>Registro de estudiantes</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label for="name">Nombre completo</label>
          <input
            type="text"
            class="form-control"
            id="name"
            autocomplete="off"
            aria-describedby="nameHelp"
            placeholder="Nombre completo del estudiante"
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
            placeholder="Código del estudiante"
            v-model="student.codigo"
          />
        </div>
        <div class="btn-registro">
          <button id="btn-registrar" type="submit" class="btn btn-primary">
            Registrar
          </button>
        </div>
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
        <tr v-for="student in Students" :key="student._id">
          <td>{{ student.name }}</td>
          <td>{{ student.codigo }}</td>
          <td>{{ student.nota1.toFixed(1) }}</td>
          <td>{{ student.nota2.toFixed(1) }}</td>
          <td>{{ student.nota3 }}</td>
          <td>{{ student.nota4 }}</td>
          <td>
            {{
              (student.definitiva =
                (student.nota1 +
                  student.nota2 +
                  student.nota3 +
                  student.nota4) /
                4).toFixed(1)
            }}
          </td>

          <td>
            <router-link
              :to="{ name: 'edit', params: { id: student._id } }"
              class="btn btn-warning"
              >Administrar notas
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
        nota3: 0,
        nota4: 0,
        definitiva: 0,
      },
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
    handleUpdateForm(id) {
      let apiURL = `http://localhost:4000/api/update-student/${id}`;

      this.axios
        .put(apiURL, this.student)
        .then((res) => {
          console.log(res);
          // this.$router.push("/view");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-student";

      axios
        .post(apiURL, this.student)
        .then((res) => {
          this.Students.push(res.data);
          this.student = {
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
#btn-registrar {
  text-align: center;
}

@media only screen and (min-width: 768px) {
  table {
    width: 80%;
    margin: 1em auto 2em;
  }
}
</style>