import Vue from 'vue';
import Vuex from 'vuex';
import menu from './modules/menu';
import views from './modules/views';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    menu,
    views,
  },
  strict: debug,
});
