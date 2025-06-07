import dashboardIcon from '../../assets/icons/dashboard.svg';
import eventsIcon from '../../assets/icons/events.svg';
import subscribeIcon from '../../assets/icons/subscribe.svg';
import teamsIcon from '../../assets/icons/teams.svg';

interface NavItem {
  label: string;
  pageName: string,
  path: string;
  icon: string;
}

export const navList: NavItem[] = [
  { label: 'Dashboard', pageName: 'Dashboard', path: '/dashboard', icon: dashboardIcon },
  { label: 'Eventos', pageName: 'Todos Eventos', path: '/events', icon: eventsIcon },
  { label: 'Equipes', pageName: 'Nossa Equipe', path: '/teams', icon: teamsIcon },
  { label: 'Inscrições', pageName: 'Inscrições', path: '/subscriptions', icon: subscribeIcon },
];