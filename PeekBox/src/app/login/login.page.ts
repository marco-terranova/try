import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonInput, IonInputPasswordToggle,
  AlertController
} from '@ionic/angular/standalone';
import { RouterModule, Router } from '@angular/router';
import { switchMap, catchError, EMPTY } from 'rxjs';
import { DatabaseService } from '../services/database';
import { LoginResponse, PendingResponse } from '../../types/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonInput, CommonModule, FormsModule,
    RouterModule, IonInputPasswordToggle
  ]
})
export class LoginPage implements OnInit, AfterViewInit, OnDestroy {

  email: string = '';
  password: string = '';

  isRegister: boolean = false;
  nomeProfilo: string = '';
  emailReg: string = '';
  passwordReg: string = '';
  tipoProfilo: 'personal' | 'business' = 'personal';

  get loginValido(): boolean {
    return !!this.email?.trim() && !!this.password?.trim();
  }
  get registerValido(): boolean {
    return !!this.nomeProfilo?.trim() && !!this.emailReg?.trim() && !!this.passwordReg?.trim();
  }

  @ViewChild('tiltCard', { static: false }) cardRef!: ElementRef<HTMLElement>;
  @ViewChild('stageRef', { static: false }) stageRef!: ElementRef<HTMLElement>;

  private cardRect: DOMRect | null = null;

  constructor(
    private alertController: AlertController,
    private dbService: DatabaseService,
    private router: Router
  ) {}

  ngOnInit() {}
  ngAfterViewInit() {}
  ngOnDestroy() {}

  // ── Card Tilt + Scene Parallax ───────────────────────
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const card = this.cardRef?.nativeElement;
    if (card) {
      this.cardRect = card.getBoundingClientRect();
      const x = (event.clientX - this.cardRect.left) / this.cardRect.width;
      const y = (event.clientY - this.cardRect.top) / this.cardRect.height;
      card.style.setProperty('--tilt-x', `${(y - 0.5) * -5}deg`);
      card.style.setProperty('--tilt-y', `${(x - 0.5) * 5}deg`);
      card.style.setProperty('--glare-x', `${x * 100}%`);
      card.style.setProperty('--glare-y', `${y * 100}%`);
    }
    const stage = this.stageRef?.nativeElement;
    if (stage) {
      const px = ((event.clientX / window.innerWidth) - 0.5) * 2;
      const py = ((event.clientY / window.innerHeight) - 0.5) * 2;
      stage.style.setProperty('--px', px.toFixed(3));
      stage.style.setProperty('--py', py.toFixed(3));
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    const card = this.cardRef?.nativeElement;
    if (card) {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
      card.style.setProperty('--glare-x', '50%');
      card.style.setProperty('--glare-y', '50%');
      this.cardRect = null;
    }
    const stage = this.stageRef?.nativeElement;
    if (stage) {
      stage.style.setProperty('--px', '0');
      stage.style.setProperty('--py', '0');
    }
  }

  // ── Mode Toggle ──────────────────────────────────────
  toggleMode() {
    this.isRegister = !this.isRegister;
  }

  // ── Login Logic ──────────────────────────────────────
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
          catchError(() => { this.router.navigateByUrl('/home', { replaceUrl: true }); return EMPTY; })
        );
      }),
      catchError(() => {
        this.alertController.create({
          cssClass: 'peekbox-alert',
          header: 'Accesso Negato',
          message: 'Email o password errati. Riprova.',
          buttons: ['OK']
        }).then(a => a.present());
        return EMPTY;
      })
    ).subscribe((res: PendingResponse) => {
      if (res.pending > 0) this.router.navigateByUrl('/box-ricevute', { replaceUrl: true });
      else this.router.navigateByUrl('/home', { replaceUrl: true });
    });
  }

  async recuperaPassword(event: Event) {
    event.preventDefault();
    (await this.alertController.create({
      cssClass: 'peekbox-alert',
      header: 'Recupero Password',
      message: 'Funzionalità non ancora disponibile sul database fisico.',
      buttons: ['OK']
    })).present();
  }

  tornaBenvenuto() {
    this.router.navigateByUrl('/benvenuto', { replaceUrl: true });
  }

  // ── Registration Logic ───────────────────────────────
  selezionaProfilo(tipo: 'personal' | 'business') {
    this.tipoProfilo = tipo;
  }

  async registrati() {
    if (!this.nomeProfilo || !this.emailReg || !this.passwordReg) {
      (await this.alertController.create({
        cssClass: 'peekbox-alert',
        header: 'Errore',
        message: 'Tutti i campi sono obbligatori!',
        buttons: ['OK']
      })).present();
      return;
    }
    this.dbService.registraUtente(this.nomeProfilo, this.emailReg, this.passwordReg, this.tipoProfilo).subscribe({
      next: async () => {
        const label = this.tipoProfilo === 'personal' ? 'Personale' : 'Business';
        const alert = await this.alertController.create({
          cssClass: 'peekbox-alert',
          header: 'Registrazione completata',
          message: `Account ${label} creato con successo.`,
          buttons: [
            {
              text: 'Accedi',
              handler: () => {
                this.email = this.emailReg;
                this.password = this.passwordReg;
                this.isRegister = false;
              }
            }
          ]
        });
        alert.present();
      },
      error: async () => {
        (await this.alertController.create({
          cssClass: 'peekbox-alert',
          header: 'Errore',
          message: 'Impossibile registrarsi. Email già presente o server offline.',
          buttons: ['OK']
        })).present();
      }
    });
  }
}
