<template>
  <div class="body">
    <div class="row">
     <div class="page-header offset-md-2 col-md-8 offset-lg-3 col-lg-6">
        <h1>{{ data.title }}</h1>
        <h5 class="m-b-1">{{ data.subtitle }}</h5>
        <router-link class="btn btn-primary" to="/">{{ data.btnText }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import site from 'site'

export default {
  data() {
    return {
      data: site.pages.thanks
    }
  }
}
</script>

<style>

</style>
