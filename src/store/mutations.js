import Vue from 'vue';

const mutations = {
    setStats(state, data) {
    	if(!!data && !!data.has_data) {
    		Vue.set(state, 'stats', data)
    	} else {
    		Vue.set(state, 'stats', {
    			has_data: false,
    			items: []
    		})
    	}
    }
}

export default mutations
