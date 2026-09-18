import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface SidebarItemConfig {
  icon: string;
  label: string;
  route: string;
  badge?: number;
  roles?: string[];
}

@Component({
  selector: 'app-sidebar-item',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss'
})
export class SidebarItemComponent {
  icon = input.required<string>();
  label = input.required<string>();
  route = input.required<string>();
  badge = input<number>();
  disabled = input(false);
}
