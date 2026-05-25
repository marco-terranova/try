import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonIcon, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonIcon, IonToolbar],
})
export class NotFoundPage {
  constructor(private router: Router) {
    addIcons({ homeOutline });
  }

  vaiHome() {
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }
}
