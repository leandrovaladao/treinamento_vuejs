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
    export default {
        name: "Main",
        methods: {
            goToPosts(){
                this.$router.push({ path: `/posts/` });
            },
            goToAlbums(){
                this.$router.push({ path: `/albums/` });
            },
            goToTodos(){
                this.$router.push({ path: `/todos/` });
            }
        }
    }
</script>

<style scoped>

</style>