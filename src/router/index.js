import Vue from 'vue'
import Router from 'vue-router'
import myTest from '@/components/myTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myTest',
      component: myTest
    }
  ]
})
