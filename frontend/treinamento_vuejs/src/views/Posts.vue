<template>
    <div class="wrapper bg-default" style="min-height: 100vh;">
        <h1>Posts</h1>
        <ul class="list-group">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        <div class="col-xs-12">
          <div>
              <a class="btn btn-sm btn-success m-t-5" @click="goToMain">
                  Voltar para Principal
              </a>
          </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Posts",
        methods: {
            goToMain(){
                this.$router.push({ path: `/` });
            },
            getPosts(){
                const url = `localhost:8000/api/v1/posts/`;

                const headers = this.getHeaders();
                const config = {
                method: 'GET',
                headers: headers
                };

                axios
                .get(url, config)
                .then(response => {
                  this.configs = response.data.configs;
                  this.show = true;

                  this.startCountDown();
                });
            },
            getHeaders(){
                const url = `localhost:8000/api/token/`;
                 const config = {
                    method: 'POST',
                    username: 'admin',
                    password: '123'
                 };
                 axios
                    .get(url, config)
                    .then(response => {
                      console.log(response)
                 });
            }
        },
        mounted() {
            this.getPosts();
        }
    }
</script>

<style scoped>

</style>