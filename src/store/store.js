import Vue from 'vue'
import Vuex from 'vuex'
import auth from './Modules/Auth/Auth'
import products from './Modules/Products';
import categories from './Modules/Categories';
import measurementUnits from './Modules/MeasurementUnits';

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    auth,
    products,
    categories,
    measurementUnits
  },
  state: {
    initialized: false,
    isLoged: false,
    apiDomain: (process.env.NODE_ENV == 'development') ? 'http://localhost/sheiley_shop_api' : 'https://gibucket.a2hosted.com/sheiley_shop_api',
    user: [],
    itbis: 0,
    currencies: [],
    online: '',
    products: [],
    shoppingCar: [],
  },
  mutations: {
    setCurrency(state, currency) {
      state.currencies.push(currency);
    },
    addProduct(state, product) {
      /*
       * product => {id_product:1,name:bar, ...}
       */
      state.products.push(product);
    },
    setProducts(state, products) {
      state.products = products;
    },
    removeProduct(state, index) {
      state.products.splice(index, 1);
    },
    setUser(state, user) {
      state.user = user;
    },
    setLoginState(state, loginState) {
      state.isLoged = loginState;
    },
    setOnline(state, value) {
      state.online = value;
    },
    loadFromCache(state, cached) {
      if (cached) {
        /* 
         * Object.assign se cambio el primer parametro para guardar 
         * todo lo que este vacio como array, por defecto estaba como
         * objeto
         * de {} a []
         */
        Object.keys(cached).forEach((key) => {
          state[key] = Object.assign(state[key], cached[key]);
        });
      }

      state.initialized = true;
    },
  },
  actions: {

  }
})