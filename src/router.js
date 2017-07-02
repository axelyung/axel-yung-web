import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/Home'
import Projects from 'pages/Projects'
import Expertise from 'pages/Expertise'
import Resources from 'pages/Resources'
import About from 'pages/About'
import Contact from 'pages/Contact'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/projects',
            component: Projects
        },
        {
            path: '/expertise',
            component: Expertise
        },
        {
            path: '/resources',
            component: Resources
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/contact',
            component: Contact
        }
    ]
})