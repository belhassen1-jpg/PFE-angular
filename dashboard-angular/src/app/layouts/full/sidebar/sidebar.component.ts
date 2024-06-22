import { Component, OnInit } from '@angular/core';
import { navItems } from './sidebar-data';
import { NavService } from '../../../services/nav.service';
import { NavItem } from './nav-item/nav-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  navItems = navItems;
  filteredNavItems: NavItem[];
  userRole: string;

  constructor(public navService: NavService) {}

  ngOnInit(): void {
    // Get the user's role from local storage
    this.userRole= localStorage.getItem('userRole') as string;
    
    // Filter navItems based on the user's role
    this.filteredNavItems = this.filterNavItemsByRole(this.userRole);
  }

  private filterNavItemsByRole(role: string): NavItem[] {
    // Define roleNavItemsMap with an index signature
const roleNavItemsMap: { [key: string]: string[] } = {
    Admin: ['Tableau de bord', 'Utilisateur', 'Employé', 'Département', 'Chef de département',
     'Offres emploi', 'Candidatures emploi',
       'Projets', 'Événement', 'Demande événement','Convention','Demande de convention', 'Partenaire', 'Liste de congés','Liste de démissions','Formation'],

      RH: ['Tableau de bord', 'Utilisateur', 'Employé', 'Département', 'Chef de département',
     'Offres emploi', 'Candidatures emploi',
       'Projets', 'Événement', 'Demande événement','Convention','Demande de convention', 'Partenaire', 'Liste de congés','Liste de démissions','Formation'],
     
    Employee: ['Tableau de bord', 'Dépenses', 'Objectifs épargne', 'Analyse financière', 'Feuille de Temps',
     'Bulletin de Paie', 'Liste événements','Liste de conventions','Liste de formation']
};

// Filter navItems based on the user's role
return this.navItems.filter(item => item.displayName && roleNavItemsMap[role].includes(item.displayName));
  }
}
