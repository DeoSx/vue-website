<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "../src/assets/index.css";
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import url("https://fonts.googleapis.com/css?family=Lato:400,700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Yeseva+One&display=swap");

body {
  font-family: "Lato", sans-serif;
}

.title {
  font-family: "Yeseva One", sans-serif;
  color: #cc9900;
  font-size: 36px;
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
