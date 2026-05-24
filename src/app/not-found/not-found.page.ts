import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonIcon],
})
export class NotFoundPage {
  constructor(private router: Router) {
    addIcons({ homeOutline, arrowBackOutline });
  }

  vaiHome() {
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }
}
