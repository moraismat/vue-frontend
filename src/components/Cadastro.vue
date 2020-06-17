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
      <div>
        <label>
          Nome: 
        </label>
        <input type="text" class="form-control" v-model="pessoas.nome" placeholder="Nome" />        
        <label>
          Cpf:
        </label>
          <input type="text" class="form-control" v-model="pessoas.cpf" placeholder="Cpf" />        
        <label>
          Email
        </label> 
         <input type="text" class="form-control" v-model="pessoas.email" placeholder="Email" />      
      </div>
    </div>
      <button type="submit" @click="salvar" class="btn btn-primary">Salvar</button>
      <button type="submit" @click="irParaListagem" class="btn btn-primary">Cancelar</button>
  </form>
</template>
<script>

export default {
  name: "app",
  data() {
    return {
      pessoas: {
          nome: '',
          cpf: '',
          email: ''
      },
      projeto: {
        titulo: '',
        descricao: '',
        cliente: '',
        data: '',
        pessoasEnvolvidas: []
      }
    };
  },
  methods: {
    irParaListagem() {
      this.$router.push({ name: 'listagem'})
    },

    salvar() {
      this.projeto.pessoasEnvolvidas.push(this.pessoas),
      this.$http.post('projetos', this.projeto),
      this.irParaListagem()
    }

  }
};
</script>
<style scoped>
</style>
