<template>
  <div id="app">
    <Home></Home>
    <router-view/>
    
  </div>
</template>
<script>
import Home from './components/Home';
import Login from './components/Login';
export default {
  name: 'App',
  components: {
  Home,
  },
};
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  align-content: center;
}
</style>
