import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vueLib from '@starport/vue'
import VueCountdown from '@chenfengyuan/vue-countdown';

const app = createApp(App)
app.config.globalProperties._depsLoaded = true
app.use(store).use(router).use(vueLib).use(VueCountdown).mount('#app')

app.component(VueCountdown.name, VueCountdown);

// global functions
app.mixin({
    methods: {
        timestampToDateString : function(timestamp) {
			let theDate = new Date(timestamp * 1000)
			return theDate.toLocaleDateString()
		},
        shortingWalletAddress : function(addr){
            return addr.substring(0, 10) + '...' + addr.substring(addr.length-5, addr.length) ;
        },
       
    },
  })
