<template>
  <el-row>
    <el-col :span="8">
      <h3>基本设置</h3>
      <el-form label-width="100px" label-position="top" size="small">
        <el-form-item label="昵称" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="email" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="个人简介" label-width="100px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="() => {}">更新</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="12" :offset="2">
      <el-button size="small">上传</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  created() {
    console.log("xx");
  }
};
</script>

<style scoped>
</style>
