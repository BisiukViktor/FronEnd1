import Vue from 'vue';
import Router from 'vue-router';
import tasks from '../menurouts/tasks.vue';
import activity from '../menurouts/activity.vue';
import stub from '../menurouts/stub.vue';
import kanban from '../menurouts/kanban.vue';
import files from '../menurouts/files.vue';
import calendar from '../menurouts/calendar.vue';
import err404 from '../menurouts/err404.vue';

Vue.use(Router);

const routes = [
    { path: '/tasks', component: tasks },
    { path: '/kanban', component: kanban },
    { path: '/activity', component: activity },
    { path: '/calendar', component: stub },
    { path: '/files', component: stub },
    { path: '/', redirect: {path: '/tasks'}, },
    { path: '*', component: err404 },
];

const router = new Router({
    linkActiveClass: 'is-active',
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;