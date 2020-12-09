<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <div class="login100-pic js-tilt" data-tilt>
          <img src="./eccomerce.png" alt="IMG" />
        </div>

        <form class="login100-form validate-form" name="login" @submit.prevent="login()">
          <span class="login100-form-title">
            faça login
          </span>

          <div class="wrap-input100 validate-input">
            <input
              class="input100"
              type="text"
              name="cpf"
              placeholder="cpf"
            />
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="Password is required"
          >
            <input
              class="input100"
              type="password"
              name="password"
              placeholder="senha"
            />
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i class="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>

          <div class="container-login100-form-btn">
            <button class="login100-form-btn" type="submit">
              Login
            </button>
          </div>
             </form>
          <div class="text-center p-t-12">
            <span class="txt1">
              esqueceu
            </span>
            <a class="txt2" href="#">
              matricula/ senha?
            </a>
          </div>
          <div
            class="wrap-input100 validate-input"
           
          >
          
            <div class="form-group ">
              <label class="form-label">escolha um usuario para teste</label>
              <select name="user" id="user" class="form-control">
                <option value="00000000000">wendel ulhoa</option>
                <option value="00000000001">zezinho</option>
              </select>
            </div>
          </div>
          <div class="container-login100-form-btn">
            <button class="login100-form-btn" @click="autoLogin()">
              Auto-login
            </button>
          </div>
         
       
      </div>
    </div>
  </div>
</template>
<style lang="css">
@import "./css/main.css";
@import "./css/util.css";
</style>
<script>
import { api } from "@/app/http/axios/api/api";
import { mapActions} from "vuex"
export default {
  methods: {
    ...mapActions({
      changeCpf: "changeCpf",
      changeUserName: "changeUserName",
      changeLogged: "changeLogged"
    }),
    autoLogin() {
     const cpf = document.getElementById('user').value
      api.create('auth/auto_login', {cpf: cpf}).then(e=>{
        localStorage.setItem('cpf',e.data.user.cpf)
        localStorage.setItem('username',e.data.user.user_name)
        localStorage.setItem('token', e.data.access_token)
        localStorage.setItem('logged', true)
        this.changeLogged(true)
        this.changeCpf(localStorage.getItem('cpf'))
        this.changeUserName(localStorage.getItem('username'))
        this.$router.push('/')
      })
    },
    login(){
      const form = document.forms.namedItem('login')
      const data = new FormData(form)
      api.create('auth/login', data).then(e=>{
        localStorage.setItem('cpf',e.data.user.cpf)
        localStorage.setItem('username',e.data.user.user_name)
        localStorage.setItem('token', e.data.access_token)
        localStorage.setItem('logged', true)
        this.changeCpf(localStorage.getItem('cpf'))
        this.changeLogged(true)
        this.changeUserName(localStorage.getItem('username'))
        this.$router.push('/')
      })
    }
  }
};
</script>
