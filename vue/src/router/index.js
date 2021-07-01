import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Types from '@/views/Types.vue'
import Relayers from '@/views/Relayers.vue'
import MyStays from '@/views/MyStays.vue'
import Market from '@/views/Market.vue'

const routerHistory = createWebHistory()
const routes = [
	{
		path: '/',
		component: Index
	},
	{ path: '/types', component: Types },
	{ path: '/relayers', component: Relayers },
	{ path: '/mystays', component: MyStays },
	{ path: '/market', component: Market }
]

const router = createRouter({
	history: routerHistory,
	routes
})

export default router
