<template>
  <nav class="navbar navbar-toggleable-sm">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <router-link class="navbar-brand" to="/">axel yung</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" v-for="(item, i) in navItems" :key="i">
          <router-link class="nav-link uppercase" :to="item.name">{{ item.name }}</router-link>
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
