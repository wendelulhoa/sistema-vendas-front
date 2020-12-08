<template>
  <div class="p-2">
    <div class="card">
      <form @submit.prevent="cadastrar()" name="categoria">
       
      <div class="card-header">
        <div>
          <h3 class="card-title"></h3>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label">Nome Categoria</label>
              <input
                type="text"
                class="form-control"
                name="nome"
                placeholder="Nome materia"
              />
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
import {api} from "@/app/http/axios/api/api"
export default {
  
  props: {
    type: {
      Type: String,
    },
  },
  methods:{
    cadastrar(){
      const form = document.forms.namedItem("categoria");
      const data = new FormData(form);
        api.create('admin/cad/categoria', data).then(e=>{
          console.log('sucesso')
        })
    }
  }
};
</script>