import { createStore } from 'vuex';
import axios from 'axios';
// const soccerbrokersURL = '  ';
const soccerbrokersURL = 'http://localhost:4000/';
import router from '../router/index'

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true,
    message: null
  },
  getters: {
    showSpinner(state) {
      return state.showSpinner
    }
  },
  mutations: {
    setUsers(state, values){
      state.users = values
    },
    setUser(state, value){
      state.user = value
    },
    setProducts(state, values){
      state.products = values
    },
    setProduct(state, value){
      state.product = value
    },
    setMessage(state, value){
      state.message = value
    },
    setSpinner(state, value){
      state.showSpinner = value
    },
    setSingleProduct(state, value){
      state.SingleProduct = value
    }
    
  },
  actions: {
    async fetchUsers(context){
      const res = await axios.get(`${soccerbrokersURL}users`);
      const {results, err} = await res.data;
      if(results) {
       context.commit('setUsers', results)
      }else{
        context.commit('setMessage', err)
      }

    },
    async fetchProducts(context){ 

      const res = await axios.get(`${soccerbrokersURL}products`)
      const {results, err} = await res.data;
      if(results) {
        context.commit('setProducts', results)
        context.commit('setSpinner',false)
      }else{
        context.commit('setMessage', err)
        context.commit('setSpinner',true)
      }
    },
    async Register(context, payload){ 

        const res = await axios.post(`${soccerbrokersURL}register`, payload)
        const {msg, err} = await res.data;
        if(msg) {
          router.push('/login')
        }
        else if(err) {
          alert(err)
        }
    },
    async Login(context, payload){ 

      const res = await axios.post(`${soccerbrokersURL}Login`, payload)
      const {msg, err} = await res.data;
      if(msg) {
        router.push('/')
      }
      else if(err) {
        alert(err)
      }
  },
    async SingleProduct(context, id){ 
      const res = await axios.get(`${soccerbrokersURL}product/${id}`,)
      const {results, err} = await res.data;
      if(results) {
        context.commit('setProduct', results[0])
      }else{
        context.commit('setMessage', err)
      }
    }
  },
modules: {

}
}
)
