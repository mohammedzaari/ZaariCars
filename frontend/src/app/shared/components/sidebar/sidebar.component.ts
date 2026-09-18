import { Component, input } from '@angular/core';
import { SidebarItemComponent, SidebarItemConfig } from './sidebar-item.component';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarItemComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  brandName = input('ZaariCars');
  items = input<SidebarItemConfig[]>([]);
  userName = input('Utilisateur');
  userRole = input('Client');
  userAvatar = input('assets/avatar-placeholder.png');
}
