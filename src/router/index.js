import Vue from 'vue';
import Router from 'vue-router';
import Template from '@/components/Template';
import Login from '@/components/Login';
import Account from '@/components/Account';

Vue.use(Router);

const root = Vue.component('root', {
  template: '<router-view></router-view>'
});

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      hidden: true
    },
    component: Login
  },
  {
    path: '/',
    component: root,
    redirect: { name: 'template' },
    meta: {
      auth: ['root', null, '']
    },
    children: [
      {
        path: 'template',
        name: 'template',
        component: Template
      },
      {
        path: 'account',
        name: 'account',
        component: Account
      }
    ]
  }
];

const router = new Router({
  mode: 'history',
  routes
});

export default router;
