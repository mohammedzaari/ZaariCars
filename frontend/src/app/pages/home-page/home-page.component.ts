import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { SidebarItemConfig } from '../../shared/components/sidebar/sidebar-item.component';
import { TopbarComponent } from '../../shared/components/topbar/topbar.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { SearchCriteria } from '../../shared/components/search-bar/search-bar.component';
import { CategoryCardComponent } from '../../shared/components/category-card/category-card.component';
import { FeatureItemComponent } from '../../shared/components/feature-item/feature-item.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';

interface CategoryConfig {
  image: string;
  title: string;
  description: string;
  count: number;
}

interface FeatureConfig {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home-page',
  imports: [
    SidebarComponent,
    TopbarComponent,
    HeroComponent,
    CategoryCardComponent,
    FeatureItemComponent,
    CtaBannerComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  sidebarItems: SidebarItemConfig[] = [
    { icon: 'home', label: 'Accueil', route: '/' },
    { icon: 'search', label: 'Recherche', route: '/search' },
    { icon: 'map-pin', label: 'Suivi GPS', route: '/tracking' },
    { icon: 'grid', label: 'Tableau de bord', route: '/dashboard' },
    { icon: 'shield', label: 'Administration', route: '/admin', roles: ['admin'] }
  ];

  categories: CategoryConfig[] = [
    {
      image: 'assets/suv.jpg',
      title: 'SUV & 4x4',
      description: 'Espace et polyvalence pour vos aventures en famille ou vos trajets longue distance.',
      count: 42
    },
    {
      image: 'assets/berline.jpg',
      title: 'Berlines',
      description: 'Élégance et confort pour vos déplacements professionnels ou urbains.',
      count: 28
    },
    {
      image: 'assets/electrique.jpg',
      title: 'Véhicules Électriques',
      description: 'Performance durable et technologies de pointe pour une conduite silencieuse.',
      count: 15
    }
  ];

  features: FeatureConfig[] = [
    {
      icon: '🛡️',
      title: 'Assurance Premium',
      description: "Couverture complète incluse pour voyager l'esprit tranquille."
    },
    {
      icon: '🕐',
      title: '24/7 Support',
      description: 'Une assistance routière réactive disponible à tout moment.'
    },
    {
      icon: '⚡',
      title: 'Réservation Instantanée',
      description: 'Confirmation immédiate et gestion mobile de votre contrat.'
    },
    {
      icon: '⭐',
      title: 'Flotte Récente',
      description: 'Des véhicules entretenus rigoureusement, de moins de 2 ans.'
    }
  ];

  onSearch(criteria: SearchCriteria) {
    console.log('Search criteria:', criteria);
  }

  goToCategory(title: string) {
    console.log('Navigate to category:', title);
  }

  signup() {
    console.log('Signup clicked');
  }
}
