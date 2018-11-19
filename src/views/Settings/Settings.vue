<template>
  <el-card style="margin-top: 20px; padding-bottom: 40px">
    <el-row>
      <el-col :span="4">
        <el-menu default-active="1" @select="() => {}">
          <el-menu-item index="1" @click="$router.replace('/main/settings/base')">基本设置</el-menu-item>
          <el-menu-item index="2" @click="$router.replace('/main/settings/security')">安全设置</el-menu-item>
          <el-menu-item index="3">消息通知</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <div style="margin-left: 20px" class="view-wrapper">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {};
</script>

<style lang="scss">
.view-wrapper {
}
</style>
