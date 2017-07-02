<template>
  <div id="app">
    <div class="container">
      <navbar></navbar>
      <router-view></router-view>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import Navbar from 'components/Navbar'
import Foot from 'components/Foot'
import VueRouter from 'vue-router'

export default {
  name: 'app',
  components: {
    Navbar,
    Foot
  }
}
</script>

