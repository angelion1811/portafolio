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
		path: '/portafolio',
		name: 'portafolio',
		component: Home
	},
	{
		path: '*',
		redirect: {name:"portafolio"}
	}
]

const router = new VueRouter({
	mode: 'history',
	routes: routes
})

export default router
