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
        titulo: 'Teste01',
        descricao: 'Des01',
        cliente: 'Teste',
        data: '30/07/1996',
        pessoasEnvolvidas: [
          {
            id: '1',
            nome: 'Nome01',
            cpf: '165161',
            email: 'teste@gmail.com'
          }
        ]
      },
      projetos: [{
        id: '1',
        titulo: 'Teste01',
        descricao: 'Desc01',
        cliente: 'Cli01',
        data: '30/07/1996',
        pessoasEnvolvidas: [
          {
            id: '1',
            nome: 'Matheus',
            cpf: '165161',
            email: 'Matheus@gmail.com'
          },{
            id: '2',
            nome: 'Raquel',
            cpf: '165161',
            email: 'Raquel@gmail.com'
          }
        ]
      },{
        id: '2',
        titulo: 'Teste02',
        descricao: 'Des02',
        cliente: 'Cliente02',
        data: '30/07/1996',
        pessoasEnvolvidas: [
          {
            id: '1',
            nome: 'Pessoa01',
            cpf: '165161',
            email: 'Pessoa01@gmail.com'
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
    
    irParaEditar(projeto){
      this.$router.push({ name: 'editar', params: {id: projeto}})
    },

  }

};
</script>
<style scoped>
</style>
