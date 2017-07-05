<template>
  <div class="body about">
    <div class="row">
      <div class="col-md-6 offset-lg-1 col-lg-4">
        <img class="profile-img" :src="imgPath(data.img)"></img>
      </div>
      <div class="col-md-6">
        <h1 class="title">{{ data.title }}</h1>
        <div class="blurb" v-html="data.bio"></div>
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
