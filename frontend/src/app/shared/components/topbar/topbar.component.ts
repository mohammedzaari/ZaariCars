import { Component, input } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  breadcrumbs = input<string[]>(['ZaariCars', 'Tableau de bord']);
  userAvatar = input('assets/avatar-placeholder.png');
}
