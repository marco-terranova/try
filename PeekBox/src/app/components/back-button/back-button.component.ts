import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { NavigationHistoryService } from '../../services/navigation-history';

@Component({
  selector: 'app-back-button',
  standalone: true,
  imports: [CommonModule, IonButton, IonIcon],
  template: `
    <ion-button fill="clear" class="back-btn" (click)="goBack()">
      <ion-icon slot="icon-only" name="arrow-back-outline"></ion-icon>
    </ion-button>
  `
})
export class BackButtonComponent {
  @Input() fallbackRoute = '/home';

  constructor(private navHistory: NavigationHistoryService) {
    addIcons({ arrowBackOutline });
  }

  goBack() {
    this.navHistory.back(this.fallbackRoute);
  }
}
