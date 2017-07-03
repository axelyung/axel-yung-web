<template>
  <div class="body">
    <div class="row">
      <div class="offset-lg-1 col-lg-4">
        <img :src="imgPath(data.img)"></img>
      </div>
      <div class="col-lg-7">
        <h1>{{ data.title }}</h1>
        <div v-html="data.bio"></div>
      </div>
    </div>
  </div>
</template>

<script>
import site from 'site'
export default {
  data() {
    return {
      data: site.pages.about
    }
  }
}
</script>

<style>

</style>
