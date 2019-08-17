import sidebar from './sidebar'

import Layout from 'views/Layout';
import MainApp from 'containers/MainApp';



export default [
  {
    path: '/',
    component: Layout,
    exact: true,
  },
  {
    path: '/new',
    component: MainApp,
    exact: true,
    sidebar
  },
];
