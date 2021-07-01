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
			let date = new Date(timestamp * 1000)
            let d = date.getDate();
            let m = date.getMonth() + 1; //Month from 0 to 11
            let y = date.getFullYear();
            return '' + (m<=9 ? '0' + m : m) + '/' +  (d <= 9 ? '0' + d : d)  + '/' + y; // mm/dd/yyyy
            // return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d); // yyyy-mm-dd
			// return date.toLocaleDateString()
		},
        shortingWalletAddress : function(addr){
            return addr.substring(0, 10) + '...' + addr.substring(addr.length-5, addr.length) ;
        },
       
    },
  })
