<template>
  <div class="body row">
    <div class="page-header offset-md-2 col-md-8 offset-lg-3 col-lg-6">
      <h1>{{ data.title }}</h1>
      <p>{{ data.blurb }}</p>
    </div>
    <div class="cases offset-lg-1 col-lg-10">
      <div class="case" v-for="(c, i) in data.case" :key="i" :style="{ borderColor: c.color}">
        <div class="row">
          <div class="col-md-6">
            <div class="inner">
              <a :href="c.url" target="_blank">
                <img class="screen" :src="imgPath(c.img)">
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <a :href="c.url" target="_blank">
              <img class="logo" :src="imgPath(c.logo)" :alt="c.name">
            </a>
            <div class="tags">
              <span class="tag" :style="{ background : c.color }" v-for="tag in c.tags" :key="tag">{{ tag }}</span>
            </div>
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
