<template>
  <div class="container-inform">
    <h3>Informe general del curso</h3>
    <section>
      <p>
        <b
          >Bienvenido al apartado de informe general. Aquí puede verificar las
          notas de sus estudiantes en cada uno de los cursos que dicta. A su
          vez, puede verificar el estado de los estudiantes mediante las
          opciones de "Aprobado" y "Reprobado".</b
        >
      </p>
    </section>
    <h4>Estructura de Datos</h4>
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
          <th scope="col">Estado del estudiante</th>
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
                4)
            }}
          </td>
          <td>{{ student.definitiva >= 3 ? "Aprobado" : "Reprobado" }}</td>
        </tr>
      </tbody>
    </table>
    <h4>Programación II</h4>
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
          <th scope="col">Estado del estudiante</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="studentProg in StudentsProg" :key="studentProg._id">
          <td>{{ studentProg.name }}</td>
          <td>{{ studentProg.codigo }}</td>
          <td>{{ studentProg.nota1.toFixed(1) }}</td>
          <td>{{ studentProg.nota2.toFixed(1) }}</td>
          <td>{{ studentProg.nota3.toFixed(1) }}</td>
          <td>{{ studentProg.nota4.toFixed(1) }}</td>
          <td>
            {{
              (studentProg.definitiva =
                (studentProg.nota1 +
                  studentProg.nota2 +
                  studentProg.nota3 +
                  studentProg.nota4) /
                4).toFixed(1)
            }}
          </td>
          <td>{{ studentProg.definitiva >= 3 ? "Aprobado" : "Reprobado" }}</td>
        </tr>
      </tbody>
    </table>
    <h4>Diseño de Interfaces</h4>
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
          <th scope="col">Estado del estudiante</th>
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
            {{ studentDisenio.definitiva >= 3 ? "Aprobado" : "Reprobado" }}
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
      Students: [],
      StudentsProg: [],
      StudentsDisenio: [],
    };
  },
  created() {
    let apiURL = "https://education-software.herokuapp.com/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.Students = res.data;
      })
      .catch((error) => {
        console.log(error);
      });

    let apiProgURL = "https://education-software.herokuapp.com/api-prog";
    axios
      .get(apiProgURL)
      .then((res) => {
        this.StudentsProg = res.data;
      })
      .catch((error) => {
        console.log(error);
      });

    let apiDisenioURL = "https://education-software.herokuapp.com/api-disenio";
    axios
      .get(apiDisenioURL)
      .then((res) => {
        this.StudentsDisenio = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.enlaces {
  display: flex;
  justify-content: center;
  background-color: rgb(207, 198, 189);
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
td:nth-child(1),
td:nth-child(2),
td:nth-child(3),
td:nth-child(4),
td:nth-child(5),
td:nth-child(6),
td:nth-child(7),
td:nth-child(8) {
  text-align: center;
}
section {
  background-color: rgb(233, 197, 197);
  border-radius: 3px;
  margin-bottom: 20px;
  box-shadow: 10px 5px 5px #0b0940;
}

@media only screen and (min-width: 768px) {
  table {
    width: 80%;
    margin: 1em auto 2em;
  }
}
</style>
