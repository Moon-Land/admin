import { MessageBox, Message } from "element-ui";
export default {
  data() {
    return {
      table: {
        data: [],
        curPage: 1,
        total: 1,
        pageSize: 10
      },
      condition: {
        // 查询条件
        _page: 1,
        _sort: undefined,
        _order: undefined
      },
      showModal: false,
      mode: "create", // "create" | "edit"
      selection: [],
      loading: true,
      conditionForm: {
        title: "",
        desc: ""
      },
      // 创建 / 编辑的表单
      form: {
        title: "",
        desc: "",
        content: ""
      }
    };
  },
  computed: {
    modalTitle() {
      return this.mode === "create"
        ? `新建${this.subject$}`
        : `编辑${this.subject$}`;
    }
  },
  methods: {
    handleCreateClick(model, refName) {
      this.form = {};
      this.showModal = true;
      this.mode = "create";
      this.$refs[refName] && this.$refs[refName].clearValidate();
    },
    handleEditClick(row, refName) {
      this.showModal = true;
      this.form = row;
      this.mode = "edit";
      this.$refs[refName] && this.$refs[refName].clearValidate();
    },
    handleAction(name) {
      this.$refs[name].validate(isValid => {
        if (isValid) {
          if (this.mode === "create") {
            this.create$(this.form).then(() => {
              this.$Message.success("创建成功");
              this.showModal = false;
              this.fetchTableData(this.condition);
            });
          } else {
            this.modify$(this.form.id, this.form).then(() => {
              this.$Message.success("修改成功");
              this.showModal = false;
              this.fetchTableData(this.condition);
            });
          }
        }
      });
    },
    handleDelete(id) {
      MessageBox.confirm(`确认删除该${this.subject$}?`, "提示")
        .then(() => {
          return this.delete$(Array.isArray(id) ? id.join(",") : id);
        })
        .then(() => {
          Message.success("删除成功");
          this.fetchTableData(this.condition);
        })
        .catch(() => {});
    },
    onSort(v) {
      const { order, key } = v; // order: normal | asc | desc
      if (order !== "normal") {
        this.fetchTableData({
          ...this.condition,
          _order: order,
          _sort: key
        });
      } else {
        this.fetchTableData(this.condition);
      }
    },
    onSelection(selection) {
      this.selection = selection.map(item => item.id);
    },
    fetchTableData(query, showLoading = true) {
      if (showLoading) {
        this.loading = true;
      }
      return this.$http
        .get("card", {
          params: {
            _limit: 10,
            ...query
          }
        })
        .then(res => {
          if (showLoading) {
            this.loading = false;
          }
          this.table.total = res.data.total;
          this.table.data = res.data.data;
          return res;
        })
        .catch(() => {
          // TODO: error handle
        });
    }
  },
  watch: {
    "table.curPage": {
      immediate: true,
      handler(val) {
        this.condition._page = val;
        this.fetchTableData({
          _page: val
        });
      }
    }
  }
};
