<template>
   <div>
       {{projeto}}
   </div>

</template>
<script>

    import axios from 'axios'

    export default {
        name: 'app',
        data(){
            return{

            projeto: {}
            }
        },

        mounted(){
            axios.get('http://localhost:8080/projetos/').then( response => this.projeto = response)
        },



    }
</script>
<style scoped>
</style>
