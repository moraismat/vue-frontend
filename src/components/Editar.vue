<template>
  <form>
    <div class="form-group">
      <div class="form-group col-md-6">
        <label>Titulo do Projeto</label>
        <input
          type="text"
          class="form-control"
          v-model="projeto.titulo"
          aria-describedby="emailHelp"
          placeholder="Titulo..."
        />
      </div>
      <div class="form-group col-md-6">
        <label>Descrição do Projeto</label>
        <input
          type="text"
          class="form-control"
          v-model="projeto.descricao"
          placeholder="Descrição..."
        />
      </div>
      <div class="form-group col-md-6">
        <label>Cliente</label>
        <input type="text" class="form-control" v-model="projeto.cliente" placeholder="Cliente..." />
      </div>
      <div class="form-group col-md-6">
        <label>Data</label>
        <input type="date" class="form-control" v-model="projeto.data" />
      </div>
      <div class="form-group col-md-6">
        <label>Pessoas Envolvidas</label>
        <div v-for="pessoas of projeto.pessoasEnvolvidas" :key="pessoas.id">
          <label>ID:</label>
          {{pessoas.id}}
          <label>
            Nome
          </label>
          <input type="text" class="form-control" v-model="pessoas.nome" placeholder="Nome" />
          
          <label>
            Cpf
            <input type="text" class="form-control" v-model="pessoas.cpf" placeholder="Cpf" />
          </label>
          <label>
            Email
            <input
              type="text"
              class="form-control"
              v-model="pessoas.email"
              placeholder="Email"
            />
          </label>
          <button @click="remover(pessoas.id)" class="btn btn-danger">Remover</button>
        </div>
      </div>
      <div class="form-group col-md-6">
        <label>
          Nome:
          <input type="text" class="form-control" v-model="pessoa.nome" placeholder="Nome" />
        </label>
        <label>
          Cpf:
          <input type="text" class="form-control" v-model="pessoa.cpf" placeholder="Cpf" />
        </label>
        <label>
          Email:
          <input type="text" class="form-control" v-model="pessoa.email" placeholder="Email" />
        </label>
        <button type="submit" @click="adicionar" class="btn btn-primary">Adicionar</button>
      </div>
      <button type="submit" @click="salvar(projeto.id)" class="btn btn-success">Salvar</button>
      <button type="submit" @click="irParaListagem" class="btn btn-danger">Cancelar</button>
    </div>
  </form>
</template>
<script>
export default {
  props: ["id"],

  data() {
    return {
      pessoa: {
        nome: "",
        cpf: "",
        email: ""
      },
      projeto: {
        id: "",
        titulo: "",
        descricao: "",
        cliente: "",
        data: "",
        pessoasEnvolvidas: []
      }
    };
  },
  mounted() {
    this.listar();
  },
  methods: {
    salvar(id) {
      this.$http.put(`projetos/${id}`, this.projeto),
        this.$router.push({ name: "listagem" });
    },
    irParaListagem() {
      this.$router.push({ name: "listagem" });
    },
    listar() {
      this.$http.get(`projetos/${this.id}`).then(res => {
        console.log(res);
        this.projeto = res.data;
      });
    },
    remover(id) {
      this.$http.delete(`pessoa/${id}`).then(res => {
        console.log(res);
      });
    },
    adicionar() {
      this.$http.post(`pessoa/add/${this.id}`, this.pessoa).then(res => {
        console.log(res), (this.pessoa = {});
      });
    }
  }
};
</script>
<style scoped>
</style>
