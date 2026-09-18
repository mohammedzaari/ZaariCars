import { Component, input, output } from '@angular/core';
import { SearchBarComponent, SearchCriteria } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-hero',
  imports: [SearchBarComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  backgroundImage = input('visily-image.png');
  tag = input('FLEXIBILITÉ TOTALE');
  titleLine1 = input('REDÉFINISSEZ VOTRE');
  titleAccent = input('MOBILITÉ');
  subtitle = input(
    "Louez le véhicule parfait en quelques clics. Que ce soit pour un week-end d'évasion ou vos besoins professionnels, ZaariCars vous accompagne partout."
  );

  bookNow = output<void>();
  learnMore = output<void>();
  search = output<SearchCriteria>();
}
