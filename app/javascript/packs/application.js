// require('channels');
import '../stylesheets/application.scss';
import 'materialize-css/dist/js/materialize';
import Vue from 'vue';
import App from '../app.vue';

require('@rails/ujs').start();
require('turbolinks').start();
require('@rails/activestorage').start();

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: (h) => h(App),
  }).$mount();
  document.body.appendChild(app.$el);
});
