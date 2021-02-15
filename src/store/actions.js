import Vue from 'vue'

import VueResource from 'vue-resource'
Vue.use(VueResource);

const actions = {
    /* Загрузка профиля */
    getStats: function({state, commit}) {
    	return new Promise((resolve, reject) => {
			Vue.http.get(state.config.api + '/data').then(response => {
				commit('setStats', response.body);
				resolve(true);
			}, error => {
				console.log(error)
				reject(error);
			});
		});
    },
}

export default actions
