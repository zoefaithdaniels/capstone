import { createStore } from 'vuex';
import {useCookies} from "vue3-cookies"
import axios from 'axios';
// const soccerbrokersURL = '  ';
const soccerbrokersURL = "https://soccer-brokersnod.onrender.com/";
const {cookies} = useCookies();
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
      console.log(payload)
      const res = await axios.post(`${soccerbrokersURL}login`, payload);
      console.log("response: ", res);
      const {jwToken, result, msg, err} = await res.data;
      if(result) {
        context.commit("setUser", result);
        context.commit("setMessage", msg)
        cookies.set("MainUser", jwToken);
        router.push('/homeview');
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
    },
    async addUser(context, id){ 
      const res = await axios.get(`${soccerbrokersURL}user/${id}`)
      const {results, err} = await res.data;
      if(results) {
        context.commit('setUser', results[0])
      }else{
        context.commit('setMessage', err)
      }
    },
    async addProduct(context, payload){ 
      console.log(payload);
      fetch(`https://soccer-brokersnod.onrender.com/product`,{
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          router.push({ name: 'Admin' })
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async deleteProduct(context, id, ) {
      const res = await axios.delete(`${soccerbrokersURL}product/${id}`);
      console.log(res);
      const {msg, err} = await res.data;
      // router.push({ name: 'Admin' })
      // console.log(result);
      if (msg) {
        context.commit("setProduct",msg[0]);
       console.log(msg);
        // dispatch('fetchProducts');
      
      }else{
        context.commit("setMessage",  err);
      }
    },
    async deleteUSER(context, id, dispatch) {
      const res = await axios.delete(`${soccerbrokersURL}USER/${id}`);
      console.log(res);
      const {msg, err} = await res.data;
      // console.log(result);
      if (msg) {
        context.commit("setUser",msg[0]);
       console.log(msg);
        dispatch('fetchUsers');
      
      }else{
        context.commit("setMessage",  err);
      }
    },
  },
modules: {

}
}
)
