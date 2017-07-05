<template>
  <div class="body resources">
    <div class="row">
      <div class="page-header offset-md-2 col-md-8 offset-lg-3 col-lg-6">
        <h1>{{ data.title }}</h1>
        <p>{{ data.blurb }}</p>
      </div>
    </div>
    <div class="row subjects">
      <div v-for="(subject, i) in data.subjects" :key="i" class="subject col-sm-6 col-md-3">
        <svg-icon :icon="subject.icon"></svg-icon>
        <div class="name">{{ subject.name }}</div>
        <a v-for="link in subject.links" :key="link.text" :href="link.url" target="_blank">
          {{ link.text }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import site from 'site'

export default {
  data() {
    return {
      data: site.pages.resources
    }
  }
}
</script>

<style>

</style>
