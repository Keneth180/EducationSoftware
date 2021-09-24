<template>
  <div id="app">
    <header>
      <nav>
        <a id="logo" href="">
          <img src="./assets/logo.jpg" alt="logo-software" />
        </a>

        <ul class="main-nav">
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Sign in</a>
          </li>
        </ul>
      </nav>
    </header>
    <HelloWorld msg="" />
    <footer>&#169; EducationSoftware.com Terms of use Privacy</footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
  flex-direction: column;
}
header nav {
  display: flex;
}

img {
  position: absolute;
  top: 0;
  width: 140px;
  display: flex;
}
h2 {
  color: rgb(80, 75, 75);
}
h5 {
  color: gray;
}
nav {
  font-size: 18px;
  padding-bottom: 10px;
  justify-content: space-between;
  padding-bottom: 0;
  height: 70px;
}
ul {
  display: flex;
  margin-right: 100px;
}
input {
  margin-top: 0.5em;
  padding: 15px;
  border-radius: 13px;
  border: 2px solid #cbdcd3;
}
main {
  overflow: hidden;
}
.main-nav {
  list-style-type: none;
}
.main-nav > li > a {
  display: flex;
  justify-content: flex-end;
  padding: 6px;
  border-radius: 6px;
  background-color: #c2c8d1;
}
.main-nav > li > a,
#logo {
  text-decoration: none;
  color: rgba(90, 12, 12, 0.7);
  transition: 0.5s;
}
.main-nav > li > a {
  margin-left: 40px;
}
.main-nav > li > a:hover {
  background-color: rgb(93, 93, 241);
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  align-items: center;
  background-color: gray;
  padding: 50px;
}
</style>
