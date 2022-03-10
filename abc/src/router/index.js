import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/components/Login'
import About from '@/components/About'
import Secret from '@/components//Secret'
import { registerVersion } from 'firebase';


Vue.use(Router);


export default new Router({
  routes: [
   
    {
      path: '/login',
      name: 'login',
      component: Login,
    },

    {
      path: '/about',
      name: 'about',
      component: About,
    },

    {
      path: '/secret',
      name: 'secret',
      component: Secret,
    },
  
  ],
});
