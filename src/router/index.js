import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import B2CPage from '../views/B2CPage.vue';
import STKPage from '../views/STKPage.vue';
import AccessToken from '../views/AccessToken.vue';
import RegisterURL from '../views/RegisterURL.vue';
import SimulateTransaction from '../views/SimulateTransaction.vue';
import TransactionStatus from '../views/TransactionStatus.vue';
import ReversalTransaction from '../views/ReversalTransaction.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/b2c',
    name: 'B2C',
    component: B2CPage,
  },
  {
    path: '/stk',
    name: 'STK',
    component: STKPage,
  },
  {
    path: '/access-token',
    name: 'AccessToken',
    component: AccessToken,
  },
  {
    path: '/register-url',
    name: 'RegisterURL',
    component: RegisterURL,
  },
  {
    path: '/simulate-transaction',
    name: 'SimulateTransaction',
    component: SimulateTransaction,
  },
  {
    path: '/transaction-status',
    name: 'TransactionStatus',
    component: TransactionStatus,
  },
  {
    path: '/reverse-transaction',
    name: 'ReversalTransaction',
    component: ReversalTransaction,
  },
 ];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;