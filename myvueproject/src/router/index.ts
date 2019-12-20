import Vue from 'vue';
import Router from 'vue-router';
import tasks from '../components/menurouts/tasks.vue';
import activity from '../components/menurouts/activity.vue';
import stub from '../components/menurouts/stub.vue';
import kanban from '../components/menurouts/kanban.vue';
import files from '../components/menurouts/files.vue';
import calendar from '../components/menurouts/calendar.vue';
import err404 from '../components/menurouts/err404.vue';

Vue.use(Router);

const routes = [
  { path: '/tasks', component: tasks },
  { path: '/kanban', component: stub },
  { path: '/activity', component: activity },
  { path: '/calendar', component: stub },
  { path: '/files', component: stub },
  { path: '/', component: tasks },
  { path: '*', component: err404 },
];

const router = new Router({
  linkActiveClass: 'is-active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
