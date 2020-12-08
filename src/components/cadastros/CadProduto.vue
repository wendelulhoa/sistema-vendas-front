<template>
  <div class="p-2">
    <div class="card">
      <form @submit.prevent="cadastrar()" name="produto">
        <div class="card-header">
          <div>
            <h3 class="card-title"></h3>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">Nome Produto</label>
                <input
                  type="text"
                  class="form-control"
                  name="nome"
                  placeholder="Nome Produto"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">Preço</label>
                <input
                  type="text"
                  class="form-control"
                  name="preco"
                  placeholder="Preço"
                />
              </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
                    <label class="form-label">enviar foto produto</label>
                <input name="file" type="file" />
                </div>
            </div>

            <div class="col-md-6">
              <div class="form-group ">
                <label class="form-label">Nome Categoria</label>
                <select name="codCategoria" class="form-control" >
                  <option v-for="(item, index) in categoria" :key="index" :value="item.id">{{item.nome}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center pb-1">
          <button class="btn btn-primary" type="submit">salvar alterações</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { api } from "@/app/http/axios/api/api";
export default {
 data() {
   return {
     categoria:[]
   }
 },
  mounted() {
    api.find('find/produtos?tipo=categoria').then(e=>{
      this.categoria = e.data
    })
  },
  methods: {
    cadastrar() {
      const form = document.forms.namedItem("produto");
      const data = new FormData(form);
      api.create("admin/cad/produto", data).then(e => {
        console.log("sucesso");
      });
    }
  }
};
</script>