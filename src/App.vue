<template>
  <the-header></the-header>
  <router-view> </router-view>
</template>
<script>
import TheHeader from './components/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>
<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   color: #2c3e50;
 opacity: 1;
background: #020916 0% 0% no-repeat padding-box;
 overflow: hidden;
}

nav {
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
