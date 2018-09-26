<template>
  <div class="main">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
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
          <Icon type="md-code-working" size="28" class="toggle-icon"/>
        </div>
        <div class="right">
          <Badge dot>
            <Icon type="ios-notifications-outline" size="26"></Icon>
          </Badge>
          <div class="avatar">
            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
            <span>Zen</span>
          </div>
        </div>
      </Header>
      <Content :style="{padding: '0 16px 16px'}">
        <!-- <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb> -->
        <router-view></router-view>
      </Content>
      <Footer>Gavin Gong &copy; 2018</Footer>
    </Layout>
  </div>
</template>
<script>
  export default {

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