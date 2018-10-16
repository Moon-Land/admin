<template>
  <Card id="table-page">
    <!-- condition -->
    <div class="header-form">
      <el-form :model="conditionForm" ref="conditionForm" inline size="small">
        <el-form-item prop="title" label="标题">
          <el-input type="text" v-model="conditionForm.title"></el-input>
        </el-form-item>
        <el-form-item prop="desc" label=" 描述">
          <el-input type="text" v-model="conditionForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="() => {}" style="margin-right: 20px">搜索</el-button>
          <el-button size="small" @click="() => $refs['conditionForm'].resetFields()">重置</el-button>
        </el-form-item>
      </el-form>
      <div class="multiple-op">
        <el-button
          type="primary"
          @click="() => handleCreateClick('form')"
          icon="md-add"
          size="small"
        >新建</el-button>
        <template v-if="selection.length">
          <el-button type="error" @click="() => handleDelete(selection)" size="small">批量删除</el-button>
        </template>
      </div>
    </div>
    <el-table :data="table.data" @selection-change="onSelection">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="ID" width="120" show-overflow-tooltip></el-table-column>
      <el-table-column prop="title" label="标题" show-overflow-tooltip></el-table-column>
      <el-table-column prop="desc" label="描述" width="120" show-overflow-tooltip></el-table-column>
      <el-table-column prop="created_at" label="创建时间" width="120" show-overflow-tooltip></el-table-column>
      <el-table-column prop="updated_at" label="更新时间" width="120" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="handleEditClick(scope.row, 'form')"
            type="text"
            size="small"
          >编辑</el-button>
          <el-button
            @click.native.prevent="() => handleDelete(scope.row.id)"
            type="text"
            size="small"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin-top: 20px"
      :current-page.sync="table.curPage"
      layout="prev, pager, next, jumper"
      :page-size="table.pageSize"
      :total="table.total"
      :background="true"
    ></el-pagination>
    <el-dialog :visible.sync="showModal" :title="modalTitle">
      <el-form :model="form" label-position="right" ref="form" :rules="rules$">
        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input v-model="form.content"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-input v-model="form.type"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="showModal = false">取 消</el-button>
        <el-button type="primary" @click.native="handleAction('form')">确 定</el-button>
      </span>
    </el-dialog>
  </Card>
</template>

<script>
  import commonMixin from './common';
  import ejectMixin from "./eject";
  export default {
    mixins: [
      commonMixin,
      ejectMixin
    ]
  }
</script>

<style scoped lang="scss">
#table-page {
  // 头部表单区域
  margin-top: 20px;

  .header-form {
    margin-bottom: 20px;
  }

  .multiple-op {
    text-align: left;
  }
}
</style>