<template>
  <div>
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
      <a class="navbar-brand">Portal de Projetos</a>
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          v-model="pesquisa.titulo"
          aria-label="Search"
        />
        <button
          type="button"
          class="btn btn-outline-success my-2 my-sm-0"
        >Search</button>
      </form>
    </nav>

    <table class="table" style="height: auto">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Titulo</th>
          <th scope="col">Decrição</th>
          <th scope="col">Cliente</th>
          <th scope="col">Data</th>
          <th scope="col">Pessoas Envolvidas</th>
          <th><button @click="irParaCadastro">Novo Cadastro</button></th>
        </tr>
      </thead>
      <tbody  v-for="projeto in projetos" :key="projeto.id"> 
        <tr>
          <th scope="row">{{projeto.id}}</th>
          <td>{{projeto.titulo}}</td>
          <td>{{projeto.descricao}}</td>
          <td>{{projeto.cliente}}</td>
          <td>{{projeto.data}}</td>
          <td>
            <ul id="nav" v-for="pessoa of projeto.pessoasEnvolvidas" :key="pessoa.id">
              <li>{{pessoa.nome}}</li>
            </ul>
          </td>
          <button class="btn btn-primary" @click="irParaEditar(projeto)"> Editar</button>
          <button class="btn btn-danger" @click="apagar(projeto.id)">Remover</button>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      pesquisa: {
        titulo: ''
      },
      projetos: []

    };
  },
  mounted() {
    this.listarTudo()
  },
  methods: {

    irParaCadastro(){
      this.$router.push({ name: 'cadastro'})
    },
    
    irParaEditar(projeto){
      this.$router.push({ name: 'editar', params: {id: projeto}})
    },

    listarTudo(){
      this.$http.get('projetos').then(res => {
      this.projetos = res.data
      })
    },
    apagar(id){
      this.$http.delete(`projetos/${id}`).then(res =>{
        console.log(res),
        this.listarTudo()
      })
    }
  },/*
  mounted() {
    this.$http.get('usuario.json').then(res => {
      this.projetos = res.data
    })
  }*/

};
</script>
<style scoped>
</style>
