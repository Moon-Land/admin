<template>
  <Card id="table-page">
    <!-- condition -->
    <div class="header-form">
      <Form :model="conditionForm" ref="conditionForm" inline>
        <FormItem prop="title" label="标题">
          <Input type="text" v-model="conditionForm.title">
          </Input>
        </FormItem>
        <FormItem prop="desc" label=" 描述">
          <Input type="text" v-model="conditionForm.desc">
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="() => {}" style="margin-right: 20px">搜索</Button>
          <Button @click="() => $refs['conditionForm'].resetFields()">重置</Button>
        </FormItem>
      </Form>
      <div class="multiple-op">
        <Button type="primary" @click="() => onShowModal()" icon="md-add">新建</Button>
        <template v-if="selection.length">
          <Button type="error">批量删除</Button>          
        </template>
      </div>
    </div>
    <Table :loading="loading" :columns="columns" :data="data" @on-sort-change="onSort" border size="large" @on-selection-change="onSelect"></Table>
    <Page :total="total" :page-size="10" @on-change="onPageChange" show-elevator style="margin-top: 18px"></Page>
    <Modal v-model="showModal" :title="modalTitle">
      <Form :model="form" label-position="right" ref="form" :rules="rules">
        <FormItem label="标题" prop="title">
          <Input v-model="form.title"></Input>
        </FormItem>
        <FormItem label="内容" prop="content">
          <Input v-model="form.content"></Input>
        </FormItem>
        <FormItem label="类型" prop="type">
          <Input v-model="form.type"></Input>
        </FormItem>
      </Form>
      <template slot="footer">
        <Button @click="showModal = false">取消</Button>
        <Button type="primary" @click="onCreateOrEdit('form')">确认</Button>
      </template>
    </Modal>
  </Card>
</template>

<script>
  export default {
    data() {
      return {
        loading: true,
        columns: [{
            type: 'selection',
            width: 50
          },
          {
            title: 'ID ',
            key: 'id',
            width: 100
          },
          {
            title: '标题 ',
            key: 'title',
            tooltip: true,
            sortable: "custom"
          },
          {
            title: '描述',
            key: 'desc'
          },
          {
            title: '创建时间',
            key: 'created_at'
          },
          {
            title: '更新时间',
            key: 'updated_at'
          },
          {
            title: '操作',
            render: (h, params) => {
              console.log(params)
              const { id } = params.row
              return h("div", {}, [
                h("Button", {
                  on: { click: () => this.onShowModal(params.row) }
                }, "编辑"),
                h("Button", {
                  on: { click: () => this.onDel(id) },
                  props: {type: 'error'}
                }, "删除"),
              ])
            }
          },
        ],
        total: 1,
        data: [],
        condition: { // 查询条件
          _page: 1,
          _sort: undefined,
          _order: undefined
        },
        conditionForm: {
          title: '',
          desc: ''
        },
        showModal: false,
        // 创建 / 编辑的表单
        form: {
          title: '',
          desc: '',
          content: ''
        },
        rules: {
          title: [
            { required: true, message: '不能为空', trigger: 'blur' },
            {
              validator(rule, val, cb) {
                console.log(rule, val)
                if (!val) {
                  return cb(new Error("不能为空"))
                } else {
                  return cb()
                }
              },
              trigger: 'blur'
          }],
          content: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          desc: []
        },
        mode: 'create', // "create" | "edit"
        selection: []
      }
    },
    methods: {
      onSort(v) {
        const { order, key } = v; // order: normal | asc | desc
        if (order !== "normal") {
          this.fetchTableData({
            ...this.condition,
            _order: order,
            _sort: key
          })
        } else {
          this.fetchTableData(this.condition)
        }
      },
      fetchTableData(query, showLoading = true) {
        if (showLoading) {
          this.loading = true
        }
        return this.$http.get("card", {
          params: {
            _limit: 10,
            ...query
          }
        }).then(res => {
          if (showLoading) {
            this.loading = false
          }
          this.total = res.data.total
          this.data = res.data.data
          return res 
        }).catch(err => {
          // TODO: error handle
        })
      },
      onPageChange(page) {
        this.condition._page = page
        this.fetchTableData({
          _page: page
        })
      },
      onDel(id) {
        const vm = this
        this.$Modal.confirm({
          title: '确认删除该条数据吗?',
          onOk(v) {
            console.log(v)
            this.$http.delete(`card/${id}`).then(res => {
              this.$Message.success("删除成功")
              vm.fetchTableData(this.condition)
            })
          }
        })
      },
      onShowModal(model) {
        this.showModal = true
        if (typeof model === 'object' && model !== null) {
          // edit
          this.mode = "edit"
          this.form = model
        } else {
          this.mode = "create"
          this.form = {}
          // create -> noop
        }
      },
      onCreateOrEdit(name) {
        this.$refs[name].validate(isValid => {
          if (isValid) {
            // TODO: create or patch
            if (this.mode === 'create') {
              this.createCard().then(res => {
                this.$Message.success("创建成功")
                this.showModal = false
                this.fetchTableData(this.condition)
              })
            } else {
              this.patchCard(this.form.id).then(res => {
                this.$Message.success("修改成功")
                this.showModal = false
                this.fetchTableData(this.condition)
              })
            }
          } else {
            this.$Messgae.error("fail")
          }
        })
      },
      onSelect(selection, row) {
        this.selection = selection.map(item => item.id)
      },
      createCard() {
        return this.$http.post("card", {
          ...this.form
        })
      },
      patchCard(id) {
        return this.$http.patch(`card/${id}`, this.form)
      }
    },
    computed: {
      modalTitle() {
        return this.mode === 'create' ? '新建卡片' : '编辑卡片'
      }
    },
    mounted() {
      this.fetchTableData({
        _page: 1
      })
    }
  }
</script>

<style scoped lang="scss">
#table-page {
  // 头部表单区域
  margin-top: 20px;
  .header-form {
    margin-bottom: 20px;
    /deep/ .ivu-form {
      text-align: left;
    }
    // 覆盖
    /deep/ .ivu-form-item-content {
      display: inline-block;
    }
    /deep/ .ivu-form-item {
      margin-right: 25px;
    }
  }
  .multiple-op {
    text-align: left;
    /deep/ .ivu-btn {
      margin-right: 12px;
    }
  }
}
</style>