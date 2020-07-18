import Vue from 'vue';
import VueRouter from 'vue-router';
import Posts from '../views/Posts.vue';
import Main from '../views/Main.vue';
import ToDos from '../views/ToDos.vue';
import Albums from '../views/Albums.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/posts/',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/albums/',
      name: 'Albums',
      component: Albums
    },
    {
      path: '/todos/',
      name: 'ToDos',
      component: ToDos
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
