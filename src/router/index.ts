import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '*',
		redirect: {name:"Home"}
	}
]

const router = new VueRouter({
	base:"/portafolio/",
	mode: 'history',
	routes: routes
})

export default router
