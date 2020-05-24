<template>
   <div>
        <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
            <a class="navbar-brand">Portal de Projetos</a>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="listar()">Search</button>
            </form>
        </nav>
    
        <table class="table">
            <thead class="thead-dark">
                <tr >
                <th scope="col">#</th>
                <th scope="col">Titulo</th>
                <th scope="col">Decrição</th>
                <th scope="col">Cliente</th>
                <th scope="col">Data</th>
                <th scope="col">Pessoas Envolvidas</th>
                <th scope="col"><button type="button" class="btn btn-outline-light">Novo Projeto</button></th>
                </tr>
            </thead>
            <tbody v-show="projetos.length > 0">
                <tr v-for="projeto of projetos" :key="projeto.id">
                <th scope="row">{{projeto.id}}</th>
                <td>{{projeto.titulo}}</td>
                <td>{{projeto.descricao}}</td>
                <td>{{projeto.cliente}}</td>
                <td>{{projeto.data}}</td>
                <td>{{projeto.pessoasEnvolvidas}}</td>
                <button type="button" class="btn btn-primary">Editar</button>
                <button type="button" class="btn btn-danger">Remover</button>
                </tr>
            </tbody>
        </table>
   </div>

</template>
<script>

    import Projeto from '../service/projetos'

    export default {
        
         data(){
            return{
            projeto: {
                id: '',
                titulo: '',
                descricao: '',
                cliente: '',
                dataEntrega: '',
                pessoasEnvolvidas: {
                    id: '',
                    nome: '',
                    cpf: '',
                    email: ''
                }
            },
            projetos: []
            }
        },

        methods: {
            listar(){
                Projeto.listar().then(resposta => {
                this.projeto = {}
                this.projetos = resposta.data
            })
    }
        }


    }
</script>
<style scoped>
</style>
