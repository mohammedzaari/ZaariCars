import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface SearchCriteria {
  location: string;
  dates: string;
  vehicleType: string;
}

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  location = signal('');
  dates = signal('');
  vehicleType = signal('');

  search = output<SearchCriteria>();

  onSearch() {
    this.search.emit({
      location: this.location(),
      dates: this.dates(),
      vehicleType: this.vehicleType()
    });
  }
}
