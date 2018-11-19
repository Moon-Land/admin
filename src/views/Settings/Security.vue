<template>
  <div class="security">
    <el-row>
      <h3>安全设置</h3>
      <ul class="group">
        <cell title="账户密码">
          <p slot="content">当前密码强度 强</p>
          <el-button slot="action" type="text" size="small">修改</el-button>
        </cell>
        <cell title="密保手机">
          <p slot="content">已经绑定手机: 177*********</p>
          <el-button slot="action" type="text" size="small">修改</el-button>
        </cell>
        <cell title="密保邮箱">
          <p slot="content">已经绑定手邮箱: 177*********@gmail.com</p>
          <el-button slot="action" type="text" size="small">修改</el-button>
        </cell>
        <cell title="密保问题">
          <p slot="content">尚未设置密保问题</p>
          <el-button slot="action" type="text" size="small">设置</el-button>
        </cell>
      </ul>
    </el-row>
  </div>
</template>

<script>
import Cell from "./components/Cell";
export default {
  components: {
    Cell
  }
};
</script>

<style scoped lang="scss">
.security {
  padding-left: 10px;
}
</style>
