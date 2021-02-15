const getters = {
	statsChart: state => {
		if(state.stats.has_data && !!state.stats.items && !!state.stats.items.length) {
			let chartFormat = JSON.parse(JSON.stringify(state.stats))
			chartFormat.items = chartFormat.items.map(line => {
				if(!!line.data && !!line.data.length) {
        	    	line.data = line.data.map(item => [item.date, item.value])
        	    	line.marker = { enabled: false }
        	    }
        	    return line
        	});

        	return chartFormat;
		} else {
			return state.stats;
		}
	},

	statsTable: state => {
		if(state.stats.has_data && !!state.stats.items && !!state.stats.items.length) {
			let tableFormat = JSON.parse(JSON.stringify(state.stats))

			let dates = []
			for (let obj of tableFormat.items) {
				dates = dates.concat(obj.data.map(item => item.date))
			}

			dates = dates.filter((item, pos) => dates.indexOf(item) == pos)

			return {
				...state.stats,
				dates: dates
			};
		} else {
			return state.stats;
		}
	},
}

export default getters