import Vue from 'vue';
import App from './app.vue';

import router from '../router';
import store from '../store';

import Meta from 'vue-meta';
Vue.use(Meta);

import Notifications from 'vue-notification';
Vue.use(Notifications);

import vueMoment from 'vue-moment';
Vue.use(vueMoment);

import HighchartsVue from 'highcharts-vue';
Vue.use(HighchartsVue);

import Highcharts from 'highcharts'
import stockInit from 'highcharts/modules/stock'
stockInit(Highcharts)

Highcharts.setOptions({
    exporting: {
        enabled: true,
        width: 1280
    },

    colors: [
        '#32A4FF',
        '#FFD54F',
        '#01D358',
        '#F25449',
        '#B245F4',
        '#57E5F8',
        '#E8F472',
        '#7059FF',
        '#5F7193',
        '#FF9E2D',
    ],

    tooltip: {
        animation: true,
        backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 0,
        headerFormat: '<div style="font-size: 12px; font-weight: 500; border-bottom: 1px solid #eaeaea; padding-bottom: 8px; margin-bottom: 8px">{point.key}</div>',
        pointFormat: '<div style="line-height: 18px;"><span style="font-size: 16px; color:{point.color};">\u25CF</span> {series.name}: <b>{point.y}</b></div>',
        shared: true,
        padding: 16,
        useHTML: true,
        xDateFormat: '%e %B %Y',
        split: false
    },

    credits: {
        enabled: false
    },

    rangeSelector: {
        buttonTheme: {
            fill: 'none',
            stroke: 'none',
            'stroke-width': 2,
            r: 3,
            style: {
                color: '#ccc',
            },
            states: {
                select: {
                    fill: '#03a9f4',
                    style: {
                        color: 'white'
                    }
                }
            }
        },

        inputDateFormat: '%d.%m.%Y',
        inputEditDateFormat: '%d.%m.%Y',

        selected: 1,

        buttonPosition: {
            align: 'left'
        },

        verticalAlign: 'bottom',

        /* Кнопки ширины */
        buttons: [
            {
                type: 'month',
                count: 1,
                text: '1'
            },
            {
                type: 'month',
                count: 3,
                text: '3'
            },
            {
                type: 'month',
                count: 6,
                text: '6'
            },
            {
                type: 'year',
                count: 1,
                text: '12'
            },
            {
                type: 'all',
                text: 'All'
            }
        ]
    },
});

Vue.config.productionTip = false

new Vue({
	el: '#app',
	render: h => h(App),
	router,
	store
});
