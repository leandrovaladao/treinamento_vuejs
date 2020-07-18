<template>
    <div class="wrapper bg-default" style="min-height: 100vh;">
        <div v-if="!loading">
            <h1>Albums</h1>
            <ul class="list-group">
                <li class="list-group-item" v-for="album in albums" v-bind:key="album.id">
                    {{ album.album_name }}<br>

                    <img v-if="album.album_cover" :src="album.album_cover">
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
        name: "Albums",
        data() {
            return {
                token: '',
                albums: [],
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
                  this.albums = response.data
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