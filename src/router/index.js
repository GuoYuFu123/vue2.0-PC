import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import  index from '../page/index.vue'
import home from '../page/home.vue'
import product from '../page/product.vue'
import about from '../page/about.vue'
import enterprise from '../page/enterprise.vue'
import applicat from '../page/applicat.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: index ,
        children: [
            { path:'', component: home },
            { path:'/product', component: product },
            { path:'/about', component: about },
            { path:'/enterprise', component: enterprise },
            { path:'/applicat', component: applicat }
        ]
    }
  ]
})
