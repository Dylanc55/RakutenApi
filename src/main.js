import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);
Vue.component('v-fa', FontAwesomeIcon);

Vue.config.productionTip = false

/* URL Animation 
const moons = ["", "😜", "😜😛", "😜😛😝", "😜😛😝🤪", "😜😛😝", "😜😛", "😜"];
const loop = (arr, count = 0, time = 150) => {
    location.hash = arr[count % arr.length];
    setTimeout(loop.bind(this, arr, count + 1, time), time);
};
loop(moons);
*/

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')