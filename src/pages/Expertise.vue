<template>
  <div class="body">
    <div class="row">
      <div class="page-header offset-md-3 col-md-6">
        <h1>{{ data.title }}</h1>
        <p>{{ data.blurb }}</p>
      </div>
    </div>
    <div class="row">
      <div v-for="(field, i) in data.fields" :key="i" class="field col-md-4 col-lg-2">
        <svg-icon :icon="field.icon"></svg-icon>
        <div class="name">{{ field.name }}</div>
        <a v-for="item in field.items" :key="item">
          {{ item }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import site from 'site'
import '../components/icons'

export default {
  data() {
    return {
      data: site.pages.expertise
    }
  }
}
</script>

<style>

</style>
