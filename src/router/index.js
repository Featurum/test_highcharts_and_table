import Vue from 'vue';

import Router from 'vue-router';
Vue.use(Router);

/* Список страниц */
const pageIndex = () => import('../services/index/index.vue');

/* Управление скролом при переходах */
const scrollBehavior = function (to, from, savedPosition) {
    /* savedPosition сохраняет позицию при браузерной навигации */
    if (savedPosition || to.params.noreload) {
        return savedPosition
    }
    /* Скролл наверх при переходе */
    else {
        return { x: 0, y: 0 }
    }
}


export default new Router({
	mode: 'history',
    scrollBehavior,
	routes: [
  		{
            path: '/',
            component: pageIndex
        }
	]
});
