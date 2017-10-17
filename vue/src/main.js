// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Post from './Post.vue'
require('./assets/css/main.css')
require('./assets/css/bootstrap.css')
Vue.config.productionTip = false

Vue.component('post', Post)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: `
  <App></App>
`,
  components: { App }
})
