<template>
  <li class="cell">
    <div>
      <h4>{{title}}</h4>
      <div class="content">
        <slot name="content"></slot>
      </div>
    </div>
    <div>
      <slot name="action"></slot>
    </div>
  </li>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped lang="scss">
.cell {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid #e8e8e8;
  .content {
    font-size: 12px;
  }
  h4 {
    margin-bottom: 6px;
  }
}
</style>
