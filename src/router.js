import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/404",
			meta: {
				public: true
			},
			name: "NotFound",
			component: () =>
				import(/* webpackChunkName: "routes" */
				`@/views/NotFound.vue`)
		},
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/nba",
			name: "nba",
			component: () => import("./views/catagory/Nba.vue")
		},
		{
			path: "/vod",
			name: "vod",
			component: () => import("./views/catagory/Vod.vue")
		},
		{
			path: "/play/:id",
			name: "play",
      component: () => import("./components/PlayPage.vue"),
      children:[
        {path:'live',component: () => import("./components/PlayPage.vue")},
        {path:'vod',component: () => import("./components/PlayPage.vue")}
      ]
		}
	]
});
