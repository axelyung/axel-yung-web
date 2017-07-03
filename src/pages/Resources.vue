<template>
  <div class="body">
    <div class="row">
      <div class="offset-md-3 col-md-6">
        <h1>{{ data.title }}</h1>
        <p>{{ data.blurb }}</p>
      </div>
    </div>
    <div class="row">
      <div v-for="(subject, i) in data.subjects" :key="i" class="col-md-3">
        <div>{{ subject.name }}</div>
          <a v-for="link in subject.links" :key="link.text" :href="link.url">
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
