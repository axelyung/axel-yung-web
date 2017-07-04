<template>
  <div class="body row">
  <div class="bg-img"></div>
    <div class="content col-md-8 col-lg-6">
      <h1>{{ data.title }}</h1>
      <p class="blurb">{{ data.blurb }}</p>
    </div>
  </div>
</template>

<script>
import data from 'site'

export default {
  data() {
    return {
      data: data.pages.home
    }
  }
}
</script>

<style>

</style>
