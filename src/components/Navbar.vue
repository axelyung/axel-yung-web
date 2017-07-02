<template>
  <nav class="navbar navbar-toggleable-sm">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">axel yung</a>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li @class="nav-item" v-for="item in navItems" :key="item.name">
          <a class="nav-link" :href="item.url">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import data from 'site'

export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      navItems: data.nav
    }
  }
}
</script>
