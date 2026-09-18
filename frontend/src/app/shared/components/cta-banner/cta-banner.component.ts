import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-cta-banner',
  templateUrl: './cta-banner.component.html',
  styleUrl: './cta-banner.component.scss'
})
export class CtaBannerComponent {
  title = input('Prêt à prendre la route ?');
  subtitle = input('');
  primaryLabel = input('Créer un compte gratuit');
  secondaryLabel = input('Consulter les offres');

  primaryAction = output<void>();
  secondaryAction = output<void>();
}
