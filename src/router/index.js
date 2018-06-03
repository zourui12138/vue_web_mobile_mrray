import Vue from 'vue'
import Router from 'vue-router'

import Home from '../modules/Home'
import Baas from '../modules/products/Baas'
import Sensitive from '../modules/products/Sensitive'
import Watermark from '../modules/products/Watermark'
import News from '../modules/News'
import About from '../modules/About'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/baas',
            name: 'baas',
            component: Baas
        },
        {
            path: '/sensitive',
            name: 'sensitive',
            component: Sensitive
        },
        {
            path: '/watermark',
            name: 'watermark',
            component: Watermark
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})
