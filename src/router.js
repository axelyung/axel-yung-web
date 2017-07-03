import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/Home'
import Projects from 'pages/Projects'
import Expertise from 'pages/Expertise'
import Resources from 'pages/Resources'
import About from 'pages/About'
import Contact from 'pages/Contact'
import Thanks from 'pages/Thanks'
import ErrorPage from 'pages/ErrorPage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '',
            name: 'home',
            component: Home
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/expertise',
            name: 'expertise',
            component: Expertise
        },
        {
            path: '/resources',
            name: 'resources',
            component: Resources
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/thanks',
            name: 'thanks',
            component: Thanks
        },
        {
            path: '*',
            name: 'error-page',            
            component: ErrorPage
        }
    ]
})