// require('channels');
import '../stylesheets/application.scss'
import 'materialize-css/dist/js/materialize'
import Vue from 'vue'
import App from '../app.vue'
import store from '../store/index'
import router from '../router/index'

require('@rails/ujs').start()
require('turbolinks').start()
require('@rails/activestorage').start()

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount()
  document.body.appendChild(app.$el)
})
