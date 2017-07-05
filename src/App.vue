<template>
  <div id="app" :class="page">
    <div class="background" :style="{ backgroundImage: bgImg }"></div>
    <div class="container body-container">
      <navbar ref="nav"></navbar>
      <transition name="fade">
        <router-view></router-view>
      </transition>
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

<style lang="scss">
$time: .5s;

.body-container{
  transition: height $time;
}


.fade-enter-active,
.fade-leave-active {
  transition-property: opacity, visibility, display;
  transition-duration:  $time/2;
}

.fade-enter-active {
  transition-delay: $time/2;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  visibility: hidden;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
  visibility: visible;
}
</style>


