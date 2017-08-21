import Vue from 'vue';
import Router from 'vue-router';

import Index from '../views/Index';
import Wentu from '../views/Wentu';
import Tableau from '../views/Tableau';
import Kibana from '../views/Kibana';

import Login from '@/components/Login';
import Account from '@/components/Account';

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
    path: '/:id',
    component: Index,
    meta: {
      auth: ['admin', 'manager', ''],
    },
    children: [
      {
        path: 'wentu',
        name: 'wentu',
        component: Wentu,
        meta: {
          auth: ['admin', 'manager', ''],
        },
      },
      {
        path: 'tableau',
        name: 'tableau',
        component: Tableau,
        meta: {
          auth: ['admin', 'manager', ''],
        },
      },
      {
        path: 'kibana',
        name: 'kibana',
        component: Kibana,
        meta: {
          auth: ['admin', 'manager', ''],
        },
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
