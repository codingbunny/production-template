// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';
import VueResource from 'vue-resource';
import { sync } from 'vuex-router-sync';
import auth from 'vue-hamlet';

import {
  Col, Row, Menu,
  Submenu, Select, Option,
  MenuItem, MenuItemGroup, Card,
  Dropdown, DropdownMenu, DropdownItem,
  Switch, Button, Input,
  Form, FormItem, Upload,
  Radio, RadioGroup, RadioButton, Tabs,
  TabPane, Tag, Table,
  TableColumn, Dialog, Pagination,
  Checkbox, CheckboxGroup, CheckboxButton, Loading, Message,
  MessageBox, Collapse, CollapseItem,
  Progress, Popover, Tooltip,
  Notification, Alert, DatePicker,
} from 'element-ui';
import moment from 'moment';
import '../theme/index.css';
import App from './App';
import router from './router';
import store from './store';
import i18n from './i18n';

import API from './api';

Vue.use(Vuex);
Vue.use(VueResource);

Vue.use(Col);
Vue.use(Row);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Card);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Switch);
Vue.use(Button);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Upload);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Dialog);
Vue.use(Pagination);
Vue.use(Select);
Vue.use(Option);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(CheckboxButton);
Vue.use(Loading);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Progress);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Alert);
Vue.use(DatePicker);

Vue.config.productionTip = false;

Vue.prototype.$moment = moment;
Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$notify = Notification;

Vue.prototype.$api = API;
Vue.router = router;
Vue.store = store;

Vue.prototype.$locale = {
  change (lang) {
    Vue.config.lang = lang;
  },
  current () {
    return Vue.config.lang;
  },
};
Vue.use(auth, {
  appKey: 'SfaB52c65Nm5Genx76rjRRPLH8LDjvvk',
  // authRedirect: '/login',
  allowThirdpartyLogin: true,
});
sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App },
});
