<template>
  <div class="hello">
    <main>
      <div class="form-container">
        <div class="form-group">
          <h2>Sign up to get started</h2>
          <h5>Enter our detals below</h5>

          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your user"
          />
          <input
            type="password"
            id="pwd"
            name="pwd"
            placeholder="Enter your password"
            autocomplete="off"
          />
          <input
            type="password"
            id="repeat-pwd"
            name="repeat-pwd"
            placeholder="Rewrite your password"
            autocomplete="off"
          />
          <button>Sign Up</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-container {
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
}
.form-group {
  border: none;
  display: flex;
  flex-direction: column;
  padding: 1em;
  background-color: var(--block-bg-color);
  min-width: 30vw;
}
input {
  margin-top: 0.5em;
  padding: 15px;
  border-radius: 13px;
  border: 2px solid #cbdcd3;
}
button {
  padding: 15px;
  border-radius: 13px;
  margin-top: 0.5em;
  background-color: #c2c8d1;
  border: none;
  cursor: pointer;
  opacity: 0.8;
}
button:hover {
  opacity: 1;
  background-color: rgb(93, 93, 241);
}
</style>
