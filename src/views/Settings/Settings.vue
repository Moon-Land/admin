<template>
  <el-card style="margin-top: 20px">
    <el-row>
      <el-col :span="4">
        <el-menu default-active="1" @select="() => {}">
          <el-menu-item index="1">基本设置</el-menu-item>
          <el-menu-item index="2">安全设置</el-menu-item>
          <el-menu-item index="3">消息通知</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <div style="margin-left: 20px">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {};
</script>

<style>
</style>
