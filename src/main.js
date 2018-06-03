// 小丶张学友
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入lib-flexible-->将px转化为rem
import 'lib-flexible/flexible.js'
import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
