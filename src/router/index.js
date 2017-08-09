import Vue from 'vue';
import Router from 'vue-router';

import Index from '../views/Index';

import Template from '@/components/Template';
import Login from '@/components/Login';
import Account from '@/components/Account';
import Form from '@/components/Form';
import Table from '@/components/Table';
import Tabs from '@/components/Tabs';
import Components from '@/components/Components';

Vue.use(Router);

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      hidden: true,
    },
    component: Login,
  },
  {
    path: '/',
    component: Index,
    redirect: { name: 'form', },
    meta: {},
    children: [
      {
        path: 'form',
        name: 'form',
        component: Form,
        meta: {},
      },
      {
        path: 'table',
        name: 'table',
        component: Table,
        meta: {},
      },
      {
        path: 'tabs',
        name: 'tabs',
        component: Tabs,
        meta: {},
      },
      {
        path: 'components',
        name: 'components',
        component: Components,
        meta: {},
      },
      {
        path: 'template',
        name: 'template',
        component: Template,
        meta: {},
      },
      {
        path: 'account',
        name: 'account',
        component: Account,
        meta: {
          hidden: true,
        },
      },
    ],
  },
];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
