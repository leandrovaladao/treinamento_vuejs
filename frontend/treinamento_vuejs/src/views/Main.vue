<template>
  <div class="wrapper bg-default" style="min-height: 100vh;">
    <nav class="navbar navbar-default navbar-fixed-top">
      <a class="navbar-brand" href="#">Opções</a>
      <div class="container">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#" @click="goToPosts">Ir para Posts <span class="sr-only">(current)</span></a></li>
          <li class="active"><a href="#" @click="goToAlbums">Ir para Albums <span class="sr-only">(current)</span></a></li>
          <li class="active"><a href="#" @click="goToTodos">Ir para To-Dos <span class="sr-only">(current)</span></a></li>
        </ul>
      </div>
  </nav>
  </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Main",
        data() {
            return {
                token: '',
                posts: [],
                albums: [],
                todos: [],
                loading: true,
                created: false
            }
        },
        methods: {
            goToPosts(){
                this.$router.push({ path: `/posts/` });
            },
            goToAlbums(){
                this.$router.push({ path: `/albums/` });
            },
            goToTodos(){
                this.$router.push({ path: `/todos/` });
            },
            getPosts(){
                const url = `https://jsonplaceholder.typicode.com/posts`;

                const config = {
                method: 'GET',
                };

                axios
                .get(url, config)
                .then(response => {
                  // console.log(response)
                  this.posts = response.data
                  this.loading = false

                });
            },
            insertPosts(post){
              const url = `http://localhost:8000/api/v1/posts/`;

              const config = {
                method: 'POST',
                athentication: `Bearer ${ this.token }`,
                title: post.title,
                body: post.body,
              };

              axios
              .post(url, config)
              .then(response => {
                console.log('Post inserido:' + response)

              });
            },
            getAlbums(){
                const url = `https://jsonplaceholder.typicode.com/albums`;

                const config = {
                method: 'GET',
                };

                axios
                .get(url, config)
                .then(response => {
                  console.log(response)
                  this.albums = response.data
                  this.loading = false

                });
            },
            insertAlbums(album){
              const url = `http://localhost:8000/api/v1/albums/`;

              const config = {
                method: 'POST',
                athentication: `Bearer ${ this.token }`,
                title: album.title,
              };

              axios
              .post(url, config)
              .then(response => {
                console.log('Album inserido:' + response)

              });
            },
            getToDos(){
                const url = `https://jsonplaceholder.typicode.com/todos`;

                const config = {
                method: 'GET',
                };

                axios
                .get(url, config)
                .then(response => {
                  // console.log(response)
                  this.todos = response.data
                  this.loading = false

                });
            },
            insertToDos(todo){
              const url = `http://localhost:8000/api/v1/todos/`;

              const config = {
                method: 'POST',
                athentication: `Bearer ${ this.token }`,
                title: todo.title,
                completed: todo.completed,
              };

              axios
              .post(url, config)
              .then(response => {
                console.log('To-Do inserido:' + response)

              });
            },
            insertDataIntoDb(){
              this.getPosts()
              this.getAlbums()
              this.getToDos()
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
                    for (var i = 0; i < this.posts.length; i++){
                      this.insertPosts(this.posts[i]);
                    }
                    for (var x = 0; x < this.albums.length; x++){
                      this.insertAlbums(this.albums[x]);
                    }
                    for (var y = 0; y < this.todos.length; y++){
                      this.insertToDos(this.todos[y]);
                    }

             });
            }
        },
      mounted() {
          const url = `http://localhost:8000/api/v1/checkcreateddata/`;
          const config = {
            method: 'GET',
          };
          axios
              .get(url, config)
              .then(() => {
                console.log('Entrou')
                this.insertDataIntoDb()
              })
              .catch(console.log('Deu certo'))
          ;
      }
    }
</script>

<style scoped>

</style>