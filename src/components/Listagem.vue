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
          <button class="btn btn-primary" @click="irParaEditar(projeto.id)"> Editar</button>
          <button class="btn btn-danger">Remover</button>
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

      projeto: {
        id: '1',
        titulo: 'Teste',
        descricao: 'Teste',
        cliente: 'Teste',
        data: '30/07/1996',
        pessoasEnvolvidas: [
          {
            id: '1',
            nome: 'Teste',
            cpf: '165161',
            email: 'teste@gmail.com'
          }
        ]
      },
      projetos: [{
        id: '1',
        titulo: 'Teste',
        descricao: 'Teste',
        cliente: 'Teste',
        data: '30/07/1996',
        pessoasEnvolvidas: [
          {
            id: '1',
            nome: 'Teste',
            cpf: '165161',
            email: 'teste@gmail.com'
          }
        ]
      },{
        id: '2',
        titulo: 'Teste',
        descricao: 'Teste',
        cliente: 'Teste',
        data: '30/07/1996',
        pessoasEnvolvidas: [
          {
            id: '1',
            nome: 'Teste',
            cpf: '165161',
            email: 'teste@gmail.com'
          }
        ]
      },]
    };
  },
  watch: {
    $route(to, ){
      this.id = to.params.id
    }
  },
  methods: {

    irParaCadastro(){
      this.$router.push({ name: 'cadastro'})
    },
    
    irParaEditar(id){
      this.$router.push({ name: 'editar', params: {id: id}})
    },

  }

};
</script>
<style scoped>
</style>
