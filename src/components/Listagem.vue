<template>
   <div>
        <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
            <a class="navbar-brand">Portal de Projetos</a>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="button" @click="pesquisar()">Search</button>
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
                <th scope="col"><router-link to="/cadastro">Novo Projeto</router-link></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto of projetos" :key="projeto.id">
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
                <button type="button" class="btn btn-primary">Editar</button>
                <button type="button" class="btn btn-danger" @click="remover(projeto)">Remover</button>
                </tr>
            </tbody>
        </table>
   </div>

</template>
<script>

    import Projeto from '../service/projetos'

    export default {
        name: 'app',
        data(){
            return{
            

            projeto: {
                id: '',
                titulo: '',
                descricao: '',
                cliente: '',
                data: '',
                pessoasEnvolvidas: [{
                     id: '',
                    nome: '',
                    cpf: '',
                    email: '' 
                }]   
            },
            projetos: []
            
            
            }
        },

        mounted(){
            this.listar()
        },

        methods: {
            listar(){
                Projeto.listar().then(resposta => {
                    console.log(resposta)
                    this.projeto = {}
                    this.projetos = resposta.data
                })
            },
            pesquisar(){
                Projeto.pesquisar('ACI').then(resposta => {
                    this.projetos = resposta.data
                })
            },
            remover(projeto){
                Projeto.delete(projeto).then(() => {
                    this.listar()
                })
            }
            
        }

    }
</script>
<style scoped>
</style>
