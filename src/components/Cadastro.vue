<template>
    <form>
        <div class="form-group">
            <label>Titulo do Projeto</label>
            <input type="text" class="form-control" v-model="projeto.titulo" aria-describedby="emailHelp" placeholder="Titulo...">
        </div>
        <div class="form-group">
            <label>Descrição do Projeto</label>
            <input type="text" class="form-control" v-model="projeto.descricao" placeholder="Descrição...">
        </div>
        <div class="form-group">
            <label>Cliente</label>
            <input type="text" class="form-control" v-model="projeto.cliente" placeholder="Cliente...">
        </div>
        <div class="form-group">
            <label>Data</label>
            <input type="date" class="form-control" v-model="projeto.data">
        </div>
        <div class="form-group">
            <label>Pessoas Envolvidas</label>
            <div>
                <label>Nome
                    <input type="text" class="form-control" v-model="projeto.nome" placeholder="Nome">
                </label>
                <label>Cpf
                    <input type="text" class="form-control" v-model="projeto.cpf" placeholder="Cpf">
                </label>
                <label>Email
                    <input type="text" class="form-control" v-model="projeto.email" placeholder="Email">
                </label>
            </div>
        </div>
        <router-link to="/cadastro"><button type="submit" @click="salvar(projeto)" class="btn btn-primary">Salvar</button></router-link>
        <router-link to="/listagem"><button type="submit" @click="cancelar()" class="btn btn-primary">Cancelar</button></router-link>
    </form>

</template>
<script>

    import Projeto from '../service/projetos'

    export default {
        name: 'app',
        data(){
            return{
            
            projeto: {
                titulo: '',
                descricao: '',
                cliente: '',
                data: '',
                nome: '',
                cpf: '',
                email: '' 
                  
            }
        }
    },

    methods: {
        salvar(projeto){
            console.log(projeto)
            Projeto.salvar(projeto).then((resposta)=>{
                console.log(resposta)
                this.projeto = {}
            })
        },
        cancelar(){
            this.projeto = {}
        }
    }
}
</script>
<style scoped>
</style>
