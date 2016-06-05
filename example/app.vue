<template>
  <div class="markdown-body">
    <demo></demo>
  </div>
</template>

<script>
import 'github-markdown-css'
import 'highlight.js/styles/github.css'
import Demo from 'vue-markdown-loader!./demo.md'

export default {
  components: {
    Demo
  }
}
</script>

<style>
  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
  }
</style>
