const routes = [
  { path: '/tasks', component: tasks },
  { path: '/kanban', component: stub },
  { path: '/activity', component: activity },
  { path: '/calendar', component: stub },
  { path: '/files', component: stub },
  { path: '/', component: tasks },
  { path: '*', component: err404 },
];

export default routes;
