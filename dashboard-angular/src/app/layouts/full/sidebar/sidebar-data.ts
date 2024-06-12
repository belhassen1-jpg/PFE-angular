import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Tableau de bord',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    displayName: 'Utilisateur',
    iconName: 'users-group',
    route: '/dashboard/userlist',
  },
  {
    displayName: 'Employé',
    iconName: 'user-cog',
    route: '/dashboard/emplist',
  },
  {
    displayName: 'Département',
    iconName: 'building',
    route: '/dashboard/deplist',
  },
  {
    displayName: 'Chef de département',
    iconName: 'building',
    route: '/dashboard/chefdeplist',
  },
  {
    displayName: 'Dépenses',
    iconName: 'brand-cashapp',
    route: '/dashboard/depenseslist',
  },
  {
    displayName: 'Objectifs épargne',
    iconName: 'businessplan',
    route: '/dashboard/objectifs-epargne-list',
  },
  {
    displayName: 'Analyse financière',
    iconName: 'report-money',
    route: '/dashboard/analyse-financier',
  },
  {
    displayName: 'Offres emploi',
    iconName: 'briefcase',
    route: '/dashboard/jobofferslist',
  },
  {
    displayName: 'Candidatures emploi',
    iconName: 'ticket',
    route: '/dashboard/jobapplications',
  },
  {
    displayName: 'Planning',
    iconName: 'report',
    route: '/dashboard/planninglist',
  },
  {
    displayName: 'Feuille de Temps',
    iconName: 'report',
    route: '/dashboard/feuille-temps-list',
  },
  {
    displayName: 'Bulletin de Paie',
    iconName: 'file-dollar',
    route: '/dashboard/emp-bullPaieList',
  },
  {
    displayName: 'Formation',
    iconName: 'calendar-event',
    route: '/dashboard/formationlist',
  },
  {
    displayName: 'Liste de formation',
    iconName: 'calendar-event',
    route: '/dashboard/formationlist-employee',
  },
  {
    displayName: 'Événement',
    iconName: 'calendar-event',
    route: '/dashboard/eventlist',
  },
  {
    displayName: 'Liste événements',
    iconName: 'calendar-event',
    route: '/dashboard/eventlist-employee',
  },
  {
    displayName: 'Demande événement',
    iconName: 'clock-edit',
    route: '/dashboard/eventDemandelist',
  },
  {
    displayName: 'Convention',
    iconName: 'calendar-event',
    route: '/dashboard/conventionlist',
  },
  {
    displayName: 'Liste de conventions',
    iconName: 'calendar-event',
    route: '/dashboard/conventionlist-employee',
  },
  {
    displayName: 'Demande de convention',
    iconName: 'clock-edit',
    route: '/dashboard/conventionDemandelist',
  },
  {
    displayName: 'Partenaire',
    iconName: 'user-star',
    route: '/dashboard/partenairelist',
  },
  {
    displayName: 'Liste de démissions',
    iconName: 'ticket',
    route: '/dashboard/demissionlist',
  },
  {
    displayName: 'Liste de congés',
    iconName: 'album',
    route: '/dashboard/congelist',
  },
  // {
  //   navCap: 'Ui Components',
  // },
  // {
  //   displayName: 'RH',
  //   iconName: 'rosette',
  //   route: '/ui-components/badge',
  // },
  // {
  //   displayName: 'Chips',
  //   iconName: 'poker-chip',
  //   route: '/ui-components/chips',
  // },
  // {
  //   displayName: 'Lists',
  //   iconName: 'list',
  //   route: '/ui-components/lists',
  // },
  // {
  //   displayName: 'Menu',
  //   iconName: 'layout-navbar-expand',
  //   route: '/ui-components/menu',
  // },
  // {
  //   displayName: 'Tooltips',
  //   iconName: 'tooltip',
  //   route: '/ui-components/tooltips',
  // },
  // {
  //   navCap: 'Auth',
  // },
  // {
  //   displayName: 'Login',
  //   iconName: 'lock',
  //   route: '/authentication/login',
  // },
  // {
  //   displayName: 'Register',
  //   iconName: 'user-plus',
  //   route: '/authentication/register',
  // },
  // {
  //   navCap: 'Extra',
  // },
  // {
  //   displayName: 'Icons',
  //   iconName: 'mood-smile',
  //   route: '/extra/icons',
  // },
  // {
  //   displayName: 'Sample Page',
  //   iconName: 'aperture',
  //   route: '/extra/sample-page',
  // },
];
