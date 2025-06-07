import { Dashboard } from '../pages/Dashboard';
import { Events } from '../pages/Events';
import { Login } from '../pages/Login/index';
import { Subscriptions } from '../pages/Subscriptions';
import { Teams } from '../pages/Teams';

export const routeList = {
  public: [{  path: '/login', component: <Login /> }],
  private: [
    { path: '/events', component: <Events /> },
    { path: '/dashboard', component: <Dashboard /> },
    { path: '/teams', component: <Teams /> },
    { path: '/subscriptions', component: <Subscriptions /> },
  ]
};