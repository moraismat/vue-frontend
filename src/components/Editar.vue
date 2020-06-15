<template>
  <form>

        {{id}}
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
          Nome
          <input type="text" class="form-control" v-model="projeto.nome" placeholder="Nome" />
        </label>
        <label>
          Cpf
          <input type="text" class="form-control" v-model="projeto.cpf" placeholder="Cpf" />
        </label>
        <label>
          Email
          <input type="text" class="form-control" v-model="projeto.email" placeholder="Email" />
        </label>
      </div>
    </div>
    <router-link to="/listagem">
      <button type="submit" class="btn btn-primary">Salvar</button>
    </router-link>
    <router-link to="/listagem">
      <button type="submit" class="btn btn-primary">Cancelar</button>
    </router-link>
  </form>
  
</template>
<script>
export default {
  props: ['id'],  
  data() {
    return {
      projeto: {
        titulo: "",
        descricao: "",
        cliente: "",
        data: "",
        nome: "",
        cpf: "",
        email: ""
      }
    };
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
