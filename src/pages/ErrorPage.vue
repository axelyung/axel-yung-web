<template>
  <div class="body">
    <div class="row">
      <div class="offset-md-3 col-md-6">
        <h1>{{ data.title }}</h1>
        <p>{{ data.subtitle }}</p>
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
      data: site.pages.error
    }
  }
}
</script>

<style>

</style>
