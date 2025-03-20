import Vue from 'vue';
import VueRouter from 'vue-router';
import NewBook from '../views/NewBook.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'new-book',
      component: NewBook,
    },
  ],
});

export default router;
