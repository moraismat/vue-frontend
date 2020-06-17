<template>
  <div>
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
      <a class="navbar-brand">Portal de Projetos</a>
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          v-model="titulo"
          aria-label="Search"
        />
        <button
          type="button"
          class="btn btn-outline-success my-2 my-sm-0"
          @click="pesquisar(titulo)"
        >Search</button>
      </form>
    </nav>

    <table class="table" style="height: auto">
      <thead class="thead-dark">
        <tr>
          <th scope="col" @click="ordernarId">#</th>
          <th scope="col" @click="ordernarTitulo">Titulo</th>
          <th scope="col" @click="ordernarDescricao">Decrição</th>
          <th scope="col" @click="ordernarCliente">Cliente</th>
          <th scope="col">Data</th>
          <th scope="col">Pessoas Envolvidas</th>
          <th><button @click="irParaCadastro" class="btn btn-primary">Novo Cadastro</button></th>
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
      titulo: '',
      clickId: 0,
      clickTitulo: 0,
      clickDescricao: 0,
      clickCliente: 0,
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
    },
    pesquisar(titulo){
      this.$http.get(`projetos/pesquisa?titulo=${titulo}`).then(res => {
        //console.log(res),
        this.projetos = {},
        this.projetos = res.data
      })
    },
    ordernarId(){
      this.clickId++
      let direction = ''

      if(this.clickId%2 === 0){
        direction = 'DESC'
      }else{
        direction = 'ASC'
      }
      this.$http.get(`projetos/page?orderBy=id&direction=${direction}`).then(res => {
        
        this.projetos = {},
        this.projetos = res.data.content
      })
    },
    ordernarTitulo(){
      this.clickTitulo++
      let direction = ''

      if(this.clickTitulo%2 === 0){
        direction = 'DESC'
      }else{
        direction = 'ASC'
      }
      //console.log(this.click, direction)
      this.$http.get(`projetos/page?orderBy=titulo&direction=${direction}`).then(res => {
        console.log(res),
        this.projetos = {},
        this.projetos = res.data.content
      })
    },
    ordernarDescricao(){
      this.clickDescricao++
      let direction = ''

      if(this.clickDescricao%2 === 0){
        direction = 'DESC'
      }else{
        direction = 'ASC'
      }
      this.$http.get(`projetos/page?orderBy=descricao&direction=${direction}`).then(res => {
        this.projetos = {},
        this.projetos = res.data.content
      })
    },
    ordernarCliente(){
      this.clickCliente++
      let direction = ''

      if(this.clickCliente%2 === 0){
        direction = 'DESC'
      }else{
        direction = 'ASC'
      }
      this.$http.get(`projetos/page?orderBy=cliente&direction=${direction}`).then(res => {
        this.projetos = {},
        this.projetos = res.data.content
      })
    },
  }, 
};
</script>
<style scoped>
</style>
