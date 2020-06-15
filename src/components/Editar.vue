<template>
  <form>      
    <div class="form-group">
      <label>Titulo do Projeto</label>
      <input
        type="text"
        class="form-control"
        v-model="projeto.titulo"
        aria-describedby="emailHelp"
        placeholder="Titulo..."
      />
    </div>
    <div class="form-group">
      <label>Descrição do Projeto</label>
      <input
        type="text"
        class="form-control"
        v-model="projeto.descricao"
        placeholder="Descrição..."
      />
    </div>
    <div class="form-group">
      <label>Cliente</label>
      <input type="text" class="form-control" v-model="projeto.cliente" placeholder="Cliente..." />
     
    </div>
    <div class="form-group">
      <label>Data</label>
      <input type="date" class="form-control" v-model="projeto.data" />
    </div>
    <div class="form-group">
      <label>Pessoas Envolvidas</label>
      <div v-for="pessoa of projeto.pessoasEnvolvidas" :key="pessoa.id">
        <label>
          Nome
          <input type="text" class="form-control" v-model="pessoa.nome" placeholder="Nome" />
        </label>
        <label>
          Cpf
          <input type="text" class="form-control" v-model="pessoa.cpf" placeholder="Cpf" />
        </label>
        <label>
          Email
          <input type="text" class="form-control" v-model="pessoa.email" placeholder="Email" />
        </label>
      </div>
    </div>
      <button type="submit" @click="irParaListagem" class="btn btn-primary">Salvar</button>
      <button type="submit" @click="irParaListagem" class="btn btn-primary">Cancelar</button>
  </form>
  
</template>
<script>
export default {
  props: ['id'],

  data() {
    return {
      projeto: {
        titulo: '',
        descricao: '',
        cliente: '',
        data: '',
        pessoasEnvolvidas: [{
          nome: '',
          cpf: '',
          email: ''
        }]
      }
    };
  },
  mounted(){
    this.projeto = this.id
  },
  methods: {
    irParaListagem() {
      this.$router.push({ name: "listagem" });
    }
  }
};
</script>
<style scoped>
</style>
