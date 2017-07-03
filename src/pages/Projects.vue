<template>
  <div class="body row">
    <div class="page-header offset-md-3 col-md-6">
      <h1>{{ data.title }}</h1>
      <p>{{ data.blurb }}</p>
    </div>
    <div class="cases offset-lg-1 col-lg-10">
      <div class="case" v-for="(c, i) in data.case" :key="i"
        :style="{ borderColor: c.color}">
        <div class="row">
          <div class="col-md-6">
            <div class="inner">
              <img class="screen" :src="imgPath(c.img)">
            </div>
          </div>
          <div class="col-md-6">
            <img class="logo" :src="imgPath(c.logo)" :alt="c.name">
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
