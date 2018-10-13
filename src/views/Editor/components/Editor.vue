<template>
  <div id="editor"></div>
</template>

<script>
  import Quill from 'quill';
  import "quill/dist/quill.core.css"
  import "quill/dist/quill.snow.css"
  // import "quill/dist/quill.bubble.css"
  let quill
  export default {
    props: ["value"],
    mounted() {
      quill = new Quill("#editor", {
        theme: 'snow',
        placeholder: "请输入..."
      })
      quill.on("text-change", (delta) => {
        this.$emit("input", quill.getContents())
      })
      quill.setContents(this.value)
    }
  }
</script>

<style scoped>
#editor {
  background: #fff;
  min-height: 600px;
}
</style>