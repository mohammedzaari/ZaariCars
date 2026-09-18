import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent {
  image = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
  modelCount = input(0);

  viewModels = output<void>();
}
