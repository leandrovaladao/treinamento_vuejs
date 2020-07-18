<template>
    <div class="wrapper bg-default" style="min-height: 100vh;">
        <div v-if="!loading">
            <h1>To-Dos</h1>
            <ul class="list-group">
                <li class="list-group-item" v-for="todo in todos" v-bind:key="todo.id">
                    <strong>Titulo:</strong>{{ todo.title }}<br>

                    <strong>Completo?</strong>{{ todo.completed | convertBoolText }}<br>
                </li>
            </ul>
            <div class="col-xs-12">
              <div>
                  <a class="btn btn-sm btn-success m-t-5" @click="goToMain">
                      Voltar para Principal
                  </a>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "ToDos",
        data() {
            return {
                token: '',
                todos: [],
                loading: true
            }
        },
        methods: {
            goToMain(){
                this.$router.push({ path: `/` });
            },
            getTodos(){
                const url = `http://localhost:8000/api/v1/todos/`;

                const config = {
                method: 'GET',
                athentication: `Bearer ${ this.token }`
                };

                axios
                .get(url, config)
                .then(response => {
                  this.todos = response.data
                  this.loading = false

                });
            },
        },
        filters: {
          convertBoolText(value){
              if (value){
                  return "Sim"
              }
              return "Não"
          }
        },
        mounted() {
            const url = `http://localhost:8000/api/token/`;
             const config = {
                method: 'POST',
                username: 'admin',
                password: '123'
             };
             axios
                .post(url, config)
                .then(response => {
                    this.token = response.data.access
                    this.getTodos();
             });
        }
    }
</script>

<style scoped>

</style>