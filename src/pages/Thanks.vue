<template>
  <div class="body">
    <div class="row">
      <div class="offset-md-3 col-md-6">
        <h1>{{ data.title }}</h1>
        <h5>{{ data.subtitle }}</h5>
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
