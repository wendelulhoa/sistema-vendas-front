<template >
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
          <li class="nav-item">
              <router-link class="nav-link active" to="/products">produtos</router-link>
         
          </li>
          <li class="nav-item">
              <router-link class="nav-link active" to="/cart">carrinho<b-badge variant="light">{{produtosCart}}</b-badge></router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link active" to="/admin">cadastro</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link active" to="/compras">compras</router-link>
          </li>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
          <li class="nav-item">
              <a class="nav-link active" @click.prevent to="/admin">{{nome}}</a>
          </li>
          <li class="nav-item">
                  <a href="/login" class="nav-link text-white " @click="sair">sair</a>
          </li>
      </b-navbar-nav>
   
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  computed: mapGetters({
    nome: "getUserName",
    produtosCart: "getProdutosCart"
  }),
   methods:{
    sair(){
      localStorage.clear();
      this.$route.push('/login')
    }
  }
}
</script>