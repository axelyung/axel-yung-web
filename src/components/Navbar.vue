<template>
  <b-navbar toggleable type="light" toggle-breakpoint="sm" sticky>
    <b-nav-toggle ref="toggler" class="hidden-md-up" target="nav_collapse"></b-nav-toggle>
    <router-link class="navbar-brand" to="/">axel yung</router-link>
    <b-collapse is-nav id="nav_collapse">
      <b-nav is-nav-bar class="navbar-nav ml-auto">
        <b-nav-item class="nav-link uppercase" v-for="(item, i) in navItems" :key="i" :to="item.name">
          {{ item.name }}
        </b-nav-item>
      </b-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import data from 'site'

export default {
  data() {
    return {
      navItems: data.nav
    }
  },
  methods: {
    closeMenu() {
      let toggler = this.$refs.toggler.$el; 
      if(toggler.attributes['aria-expanded'].nodeValue === 'true'){
        this.$refs.toggler.$el.click();
      }
    }
  }
}
</script>
