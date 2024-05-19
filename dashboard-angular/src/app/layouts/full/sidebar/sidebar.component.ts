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
    Admin: ['Dashboard', 'User', 'Employee', 'Department', 'Chef Department',
     'Job Offers', 'Job Applications',
       'Planning', 'Event', 'Event Demande','Convention','Convention Demande', 'Partenaire', 'Conge List','Demission List','Formation'],

      RH: ['Dashboard', 'User', 'Employee', 'Department', 'Chef Department',
     'Job Offers', 'Job Applications',
       'Planning', 'Event', 'Event Demande','Convention','Convention Demande', 'Partenaire', 'Conge List','Demission List','Formation'],
     
    Employee: ['Dashboard', 'Depenses', 'Objectifs Epargne', 'Analyse Financier', 'Feuille de Temps',
     'Bulletin Paie', 'Event List','Convention List','Formation List']
};

// Filter navItems based on the user's role
return this.navItems.filter(item => item.displayName && roleNavItemsMap[role].includes(item.displayName));
  }
}
