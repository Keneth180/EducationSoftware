 <template>
  <div class="container">
    <form @submit.prevent="buscarUsuario()" v-if="show">
      <div class="form-group">
        <label for="exampleInputEmail1">Usuario</label>
        <input
          type="text"
          class="form-control"
          placeholder="Ingresa tu usuario"
          required
          v-model="form.username"
        />
        
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Contraseña</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Ingresa tu contraseña"
          required
          v-model="form.password"
        />
      </div>
      <div class="boton-ingresar">
        <button type="submit" class="btn btn-primary">Iniciar sesión</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      show: true,
      users: [],
    };
  },
  props: {
    msg: String,
  },
  methods: {
    buscarUsuario() {
      let apiURL = "https://education-software.herokuapp.com/api-login/users";
      console.log("Se ejecuta la función Buscar");
      axios.get(apiURL).then((res) => {
        console.log(this.users);
        this.users = res.data;

        this.users.forEach((value) => {
          if (this.form.username === value.username) {
            console.log("Usuario si existe");
            if (this.form.password === value.password) {
              console.log("Contraseña Correcta");

              window.localStorage.setItem("autenticacion", "ok");

              this.$router.push("/home");
            }
          }
        });
      });
    },
  },
  beforeCreate() {
    var autenticacion = window.localStorage.getItem("autenticacion");
    console.log("Autenticacion esta " + autenticacion);
    if (autenticacion === "ok") {
      this.$router.push("/home");
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input{
  border: 1px solid rgb(0, 0, 0);
  width: 100%;
}
.container {
  width: 50%;
  border: 1px solid black;
  box-shadow: 10px 5px 5px #0b0940;
  background-color: #dae3f5;
  padding: 50px;
}
.form-group {
  display: flex;
  flex-direction: column;
}
.boton-ingresar{
  flex: 1 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>