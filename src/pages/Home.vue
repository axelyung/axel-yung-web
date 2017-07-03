<template>
  <div class="body row">
  <div class="bg-img" :style="{ backgroundImage: 'url(' + imgPath(data.bgImg) + ')' }"></div>
    <div class="blurb col-md-6">
      {{ data.blurb }}
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
