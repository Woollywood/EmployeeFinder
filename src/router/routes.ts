export const routes = [
	{ path: '/', name: 'home', component: () => import('@/pages/HomePage.vue') },
	{ path: '/:slug', name: 'employee', component: () => import('@/pages/EmployeePage.vue') },
];
