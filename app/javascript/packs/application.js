// require('channels');
import '../stylesheets/application.scss'
import 'materialize-css/dist/js/materialize'
import Vue from 'vue'
import {
  extend, localize, ValidationProvider, ValidationObserver,
} from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja.json'
import * as rules from 'vee-validate/dist/rules'
import App from '../app.vue'
import store from '../store/index'
import router from '../router/index'

// vee-validate

require('@rails/ujs').start()
require('turbolinks').start()
require('@rails/activestorage').start()

for (const rule in rules) {
  extend(rule, rules[rule])
}

localize('ja', ja)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount()
  document.body.appendChild(app.$el)
})
