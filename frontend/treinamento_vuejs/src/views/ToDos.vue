<template>
    <div class="wrapper bg-default" style="min-height: 100vh;">
        <div v-if="!loading">
            <h1>To-Dos</h1>
            <ul class="list-group">
                <li class="list-group-item" v-for="post in posts" v-bind:key="post.id">
                    {{ post.content }}<br>

                    <img v-if="post.image" :src="post.image">
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
            getAlbums(){
                const url = `http://localhost:8000/api/v1/albums/`;

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
                    this.getAlbums();
             });
        }
    }
</script>

<style scoped>

</style>