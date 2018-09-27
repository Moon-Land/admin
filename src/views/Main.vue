<template>
  <div class="main">
    <Sider :collapsed-width="78" :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            列表面
          </template>
          <MenuItem name="1-1">查询表格</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '200px'}">
      <Header class="header" :style="{background: '#fff'}">
        <div class="left">
          
        </div>
        <div class="right">
          <Dropdown trigger="click" placement="bottom-end">
            <Badge dot class="clickable">
              <Icon type="ios-notifications-outline" size="26"></Icon>
            </Badge>
            <DropdownMenu slot="list">
              <DropdownItem>啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</DropdownItem>
              <DropdownItem>啦啦啦</DropdownItem>
              <p class="clickable clear-btn" @click="handleClear">清除通知</p>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <div class="clickable avatar">
              <Avatar :src="user.avatar" />
              <span>{{user.name}}</span>
            </div>
            <DropdownMenu slot="list">
              <DropdownItem>个人中心</DropdownItem>
              <DropdownItem>个人设置</DropdownItem>
              <DropdownItem divided @click.native="handleLogout">退出登录</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Header>
      <Content :style="{padding: '0 16px 16px'}">
        <router-view></router-view>
      </Content>
      <Footer>Gavin Gong &copy; 2018</Footer>
    </Layout>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        key: 'value',
        isCollapsed: false,
        user: {}
      }
    },
    created() {
      try {
        this.user = JSON.parse(localStorage.getItem('Z-USER'))
      } catch (error) {
        console.log(error)
      }
    },
    methods: {t
      // 登出
      handleLogout() {
        localStorage.removeItem("Z-TOKEN")
        this.$router.replace("/login")
      },
      // 清除通知
      handleClear() {
        this.$http.post({})
      }
    },
  }
</script>
<style scoped lang="scss">
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.right {
  display: inline-flex;
  align-items: center;
  /deep/ .ivu-badge {
    line-height: 1.5;
    margin-right: 20px;
  }
}
.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  width: 60px;
}
.main {
  /deep/ .ivu-layout-header {
    // padding: 0 50px;
  }
}
</style>