<template>
  <section>
    <nav class="navbar navbar-dark bg-primary">
      <div
        @click="
          () => {
            this.$router.go();
          }
        "
        class="container d-flex justify-content-center"
      >
        <router-link class="navbar-brand mb-2 h1" to="/">Home</router-link>
      </div>
      <div class=" container d-flex justify-content-center">
        <router-link class="navbar-brand mb-2 h1" to="/getshtdone">
          Improve
        </router-link>
      </div>
    </nav>
    <router-view />
  </section>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
