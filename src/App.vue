<template>
  <div id="app" :class="page">
    <div class="background" :style="{ backgroundImage: bgImg }"></div>
    <div class="container body-container">
      <navbar ref="nav"></navbar>
      <router-view></router-view>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import Navbar from 'components/Navbar'
import Foot from 'components/Foot'
import VueRouter from 'vue-router'
import site from 'site'

export default {
  name: 'app',
  created() {
    this.setBackground();
  },
  data() {
    console.log(this.$route.name)
    return {
      page: this.$route.name,
      bgImg: ''
    }
  },
  watch: {
    '$route.name'() {
      this.page = this.$route.name;
      this.setBackground();
      this.$refs.nav.closeMenu();
    }
  },
  components: {
    Navbar,
    Foot
  },
  methods: {
    setBackground() {
      let img;
      if (site.pages[this.page] && site.pages[this.page].backgroundImage) {
        img = site.pages[this.page].backgroundImage
      } else {
        img = site.default.backgroundImage;
      }
      this.bgImg = `url(${this.imgPath(img)})`;
    }
  }
}
</script>

