<template>
  <div id="app" :class="page">
    <div class="container body-container">
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
  data() {
    console.log(this.$route.name)
    return {
      page: this.$route.name
    }
  },
  watch: {
  '$route.name' () {
    this.page = this.$route.name
  }
},
  components: {
    Navbar,
    Foot
  }
}
</script>

