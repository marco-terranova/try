import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonInput, IonButton, IonInputPasswordToggle,
  AlertController
} from '@ionic/angular/standalone';
import { RouterModule, Router } from '@angular/router';
import { switchMap, catchError, EMPTY, of } from 'rxjs';
import { DatabaseService } from '../services/database';
import { LoginResponse, PendingResponse } from '../../types/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonInput, IonButton, CommonModule, FormsModule,
    RouterModule, IonInputPasswordToggle
  ]
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  bgImage: string = 'https://plus.unsplash.com/premium_photo-1661913412680-c274b6fea096?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  constructor(
    private alertController: AlertController,
    private dbService: DatabaseService,
    private router: Router
  ) { }

  ngOnInit() { }

  accedi() {
    this.dbService.loginUtente(this.email, this.password).pipe(
      switchMap((res: LoginResponse) => {
        localStorage.setItem('token',        res.token);
        localStorage.setItem('utente_id',    String(res.user.id));
        localStorage.setItem('utente_nome',  res.user.username);
        localStorage.setItem('utente_email', res.user.email || '');
        localStorage.setItem('tipo_profilo', res.user.tipo_profilo || 'personal');
        localStorage.setItem('is_admin',     res.user.is_admin ? '1' : '0');

        return this.dbService.getCondivisioniPending(String(res.user.id)).pipe(
          catchError(() => {
            this.router.navigateByUrl('/home', { replaceUrl: true });
            return EMPTY;
          })
        );
      }),
      catchError(() => {
        // Mostra l'alert di errore login in modo asincrono senza rompere il flusso
        this.alertController.create({
          cssClass: 'peekbox-alert',
          header: 'Accesso Negato',
          message: 'Email o password errati. Riprova.',
          buttons: ['OK']
        }).then(alert => alert.present());
        return EMPTY;
      })
    ).subscribe((res: PendingResponse) => {
      if (res.pending > 0) {
        this.mostraPopupBoxRicevute(res.pending);
      } else {
        this.router.navigateByUrl('/home', { replaceUrl: true });
      }
    });
  }

  private async mostraPopupBoxRicevute(quantita: number) {
    const testoSingolare = quantita === 1
      ? 'Hai ricevuto <strong>1 nuova box condivisa</strong> in attesa di approvazione!'
      : `Hai ricevuto <strong>${quantita} nuove box condivise</strong> in attesa di approvazione!`;

    const alert = await this.alertController.create({
      cssClass: 'peekbox-alert peekbox-alert--notify',
      header: '📦 Box Ricevute',
      message: testoSingolare,
      buttons: [
        {
          text: 'Vai alla Home',
          role: 'cancel',
          handler: () => { this.router.navigateByUrl('/home', { replaceUrl: true }); }
        },
        {
          text: 'Visualizza Box',
          cssClass: 'alert-btn-primary',
          handler: () => { this.router.navigateByUrl('/box-ricevute', { replaceUrl: true }); }
        }
      ]
    });
    await alert.present();
  }

  async recuperaPassword(event: Event) {
    event.preventDefault();
    const alert = await this.alertController.create({
      cssClass: 'peekbox-alert',
      header: 'Recupero Password',
      message: 'Funzionalità non ancora disponibile sul database fisico.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
