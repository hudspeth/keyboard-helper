<template>
  <div id="app">
    <!--<display></display>-->
    <keyboard></keyboard>
  </div>
</template>

<script>
import Display from './components/Display'
import Keyboard from './components/Keyboard'

export default {
  name: 'App',
  components: {
    display: Display,
    keyboard: Keyboard
  }
}
</script>

<style>
html {
  font-size: 10px;
  background-color: lightblue;
  background-size: cover;
}
body,html {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
</style>
