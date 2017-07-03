<template>
  <div class="body row">
    <div class="offset-md-3 col-md-6">
      <h1>{{ data.title }}</h1>
      <p>{{ data.blurb }}</p>
    </div>
    <div class="cases">
      <div class="case" v-for="(c, i) in data.case" :key="i">
        <div class="row">
          <div class="col-md-6">
            <img :src="imgPath(c.img)">
          </div>
          <div class="col-md-6">
            <img :src="imgPath(c.logo)" :alt="c.name">
            <p class="blurb">{{ c.blurb }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import site from 'site'

export default {
  data() {
    return {
      data: site.pages.projects
    }
  }
}
</script>

<style>

</style>
