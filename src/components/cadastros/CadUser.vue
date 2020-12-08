<template>
  <div class="p-2">
    <form @submit.prevent="cadastrar()" name="user">
    <div class="card">
      <div class="card-header">
        <div>
          <h3 class="card-title">Cadastro </h3>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label">username</label>
              <input
                type="text"
                class="form-control"
                name="nome"
                placeholder="Nome"
              />
            </div>
            <div class="form-group">
              <label class="form-label">cpf</label>
              <input type="text" class="form-control" placeholder="CPF" name="cpf"/>
            </div>
            
            <div class="form-group">
              <label class="form-label">ENDERECO</label>
              <input type="text" class="form-control" placeholder="ENDERECO" name="endereco"/>
            </div>
            
            <div class="form-group">
              <label class="form-label">CIDADE</label>
              <input type="text" class="form-control" placeholder="CIDADE" name="cidade"/>
            </div>
            <div class="form-group">
              <label class="form-label">SENHA</label>
              <input type="text" class="form-control" placeholder="SENHA" name="senha"/>
            </div>
            
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label">DATA NASCIMENTO</label>
              <input
                type="date"
                class="form-control"
                placeholder="DATA NASCIMENTO"
                name="dataNasc"
              />
            </div>
            <div class="form-group">
              <label class="form-label">BAIRRO</label>
              <input type="text" class="form-control" placeholder="ENDERECO" name="bairro"/>
            </div>
            <div class="form-group">
              <label class="form-label">uf</label>
              <input
                type="text"
                class="form-control"
                placeholder="uf"
                name="uf"
              />
            </div>
            <div class="form-group">
              <label class="form-label">rua</label>
              <input
                type="text"
                class="form-control"
                placeholder="rua"
                name="rua"
              />
            </div>

            <div class="form-group">
              <label class="form-label">cep</label>
              <input
                type="text"
                class="form-control"
                placeholder="cep"
                name="cep"
              />
            </div>
        
            
            </div>
          </div>
        </div>
        <div class="text-center pb-1">
        <button  class="btn btn-primary" type="submit">salvar alterações</button>
      </div>
      </div>
      
      </form>
    </div>

</template>

<script>

import {api} from '@/app/http/axios/api/api'
export default {
 
  methods:{
   cadastrar(){
      const form = document.forms.namedItem("user");
      const data = new FormData(form);
      api.create("admin/cad/user", data).then((e) => {
        this.$bvToast.toast(
            "cadastrado com sucesso",
            {
              title: "sucesso",
              variant: "success",
              solid: true,
            }
          );
      }).catch(e=>{
        this.$bvToast.toast(
            "verifique os campos informados e tente novamente",
            {
              title: "ocorreu um erro",
              variant: "danger",
              solid: true,
            }
          );
      });
    }
  }
}
</script>