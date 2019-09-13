import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routers'
import axios from 'axios'
import {store} from './store'

Vue.use(VueRouter)

axios.defaults.baseURL='https://order-app-1-b5ca8.firebaseio.com/'

const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    //return{ x:0,y:100}
    //return{ selector:'.btn'}
    if(savedPosition){
      return savedPosition
    }else{
      return{ x:0,y:0}
    }
  }
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
