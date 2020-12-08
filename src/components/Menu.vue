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
              <router-link class="nav-link active" to="/cart">carrinho<b-badge variant="light">1</b-badge></router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link active" to="/admin">cadastro</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link active" to="/admin">compras</router-link>
          </li>
      </b-navbar-nav>

   
    </b-collapse>
  </b-navbar>
</div>
</template>