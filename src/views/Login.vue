<template>
  <div class="login">
    <div class="login-card">
      <img src="../assets/logo.png" alt="" class="logo">
      <Form :model="form" :label-width="0" ref="form" :rules="rules">
        <FormItem label="" prop="account">
          <Input v-model="form.account" placeholder="账号" size="large"></Input>
        </FormItem>
        <FormItem label="" prop="pwd">
          <Input v-model="form.pwd" placeholder="密码" size="large"></Input>
        </FormItem>
        <FormItem label="">
          <Button type="primary" @click="() => onLogin('form')" class="lg-btn">登录</Button>
        </FormItem>
      </Form>
    </div>
    <footer>
      GG&copy;2018
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          account: '',
          pwd: ''
        },
        rules: {
          account: [
            { required: true, message: '账号不能为空', trigger: 'blur' },
          ],
          pwd: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    computed: {
      redirect() {
        return this.$route.query.redirect
      }
    },
    methods: {
      login() {
        return this.$http.patch('login', {})
      },
      onLogin(name) {
        this.$refs[name].validate(isValid => {
          console.log(isValid);
          
          if (isValid) {
            // 调用登录接口 -> 存入 Token -> 重定向
            this.login().then(res => {
              try {
                localStorage.setItem("Z-TOKEN", Date.now())
                localStorage.setItem("Z-USER", JSON.stringify(res.data.data))
              } catch (error) {
                this.$Message.error("登录信息存储失败")                
              }
              this.$Message.success({
                content: '登录成功',
                onClose: () => {
                  this.$router.replace(this.redirect ? this.redirect : '/main/table')
                }
              })
            })
          }
        })
      }
    },
  }
</script>

<style scoped lang="scss">
.login {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 20px 0;
}
.logo {
  max-width: 80px;
}
.login-card {
  width: 300px;
  margin: 10% auto;
  padding: 20px;
  background: #fff;
  // box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.4);
}
.lg-btn {
  width: 100%;
}
</style>