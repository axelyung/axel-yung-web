<template>
  <footer class="footer">
    <div class="inner">
      <a class="title block" href="/">{{ data.title }}</a>
      <a class="email block" :href="'mailto:' + data.email">{{ data.email }}</a>
      <div class="tele-nr">{{ data.teleNr }}</div>
      <div class="media-links align-center">
        <a class="inline-block" v-for="(item,i) in data.media" :key="i" :href="item.url" target="_blank">
          <svg-icon :icon="item.icon"></svg-icon>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import './icons';
import data from 'site';

export default {
  data() {
    return {
      data: data.footer,
    }
  }
}
</script>

<style>

</style>
