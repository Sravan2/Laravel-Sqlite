
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
import ExampleComponent from './components/ExampleComponent.vue';
import Signatures from './components/Signatures.vue';
import SignatureForm from './components/SignatureForm.vue';

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('signatures', require('./components/Signatures.vue'));
// Vue.component('signature-form', require('./components/SignatureForm.vue'));
// Vue.component('paginate', require('vuejs-paginate'));

Vue.component('example-component', ExampleComponent);
Vue.component('signatures', Signatures);
Vue.component('signature-form', SignatureForm);
Vue.component('paginate', require('vuejs-paginate'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app'
});
