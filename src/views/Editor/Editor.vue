<template>
  <div>
    <editor v-model="data"/>
  </div>
</template>

<script>
  import Editor from './components/Editor'
  export default {
    components: {
      Editor
    },
    data() {
      return {
        data: {}
      }
    },
  }
</script>

<style scoped>
</style>