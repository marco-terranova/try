import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SupabaseService } from '../services/supabase.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-area-personale',
  templateUrl: './area-personale.page.html',
  styleUrls: ['./area-personale.page.scss'],
})
export class AreaPersonalePage implements OnInit {

  nomeUtente: string = '';
  emailUtente: string = '';
  isAdmin: boolean = false;
  totaleBox: number = 0;
  totaleArticoli: number = 0;

  vistaCorrente: 'profilo' | 'box-eliminate' = 'profilo';

  // Box eliminate
  boxEliminate: any[] = [];
  isLoadingEliminate: boolean = false;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private supabase: SupabaseService,
    private alertCtrl: AlertController
  ) {}

  async ngOnInit() {
    await this.caricaProfilo();
  }

  async caricaProfilo() {
    try {
      const user = await this.supabase.getCurrentUser();
      if (!user) { this.router.navigate(['/login']); return; }

      this.emailUtente = user.email || '';
      const { data: profilo } = await this.supabase.client
        .from('profili')
        .select('nome, ruolo')
        .eq('id', user.id)
        .single();

      if (profilo) {
        this.nomeUtente = profilo.nome || '';
        this.isAdmin = profilo.ruolo === 'admin';
      }

      const { count: nBox } = await this.supabase.client
        .from('box')
        .select('id', { count: 'exact', head: true })
        .eq('proprietario_id', user.id)
        .is('eliminato_il', null);
      this.totaleBox = nBox || 0;

      const { count: nArt } = await this.supabase.client
        .from('oggetti')
        .select('id', { count: 'exact', head: true })
        .eq('proprietario_id', user.id);
      this.totaleArticoli = nArt || 0;

    } catch (e) {
      console.error('Errore caricaProfilo', e);
    }
  }

  navTo(path: string) {
    this.navCtrl.navigateForward(path);
  }

  navForward(path: string) {
    this.navCtrl.navigateForward(path);
  }

  /** Logo cliccabile: torna alla home */
  navBack() {
    this.navCtrl.navigateBack('/home');
  }

  vaiHome() {
    this.navCtrl.navigateBack('/home');
  }

  vaiAdmin() {
    this.navCtrl.navigateForward('/admin');
  }

  async confermaLogout() {
    const alert = await this.alertCtrl.create({
      header: 'Conferma Logout',
      message: 'Sei sicuro di voler uscire dal tuo account?',
      buttons: [
        { text: 'Annulla', role: 'cancel' },
        {
          text: 'Esci',
          role: 'destructive',
          handler: async () => {
            await this.supabase.signOut();
            this.router.navigate(['/login']);
          }
        }
      ]
    });
    await alert.present();
  }

  badgeClass(dataEl: string): string {
    const giorni = this.giorniRimasti(dataEl);
    if (giorni > 15) return 'badge--blue';
    if (giorni > 7)  return 'badge--amber';
    return 'badge--red';
  }

  giorniRimasti(dataEl: string): number {
    const scadenza = new Date(dataEl);
    scadenza.setDate(scadenza.getDate() + 30);
    const diff = scadenza.getTime() - Date.now();
    return Math.max(0, Math.ceil(diff / 86400000));
  }

  percentualeScadenza(dataEl: string): number {
    const giorni = this.giorniRimasti(dataEl);
    return Math.round((giorni / 30) * 100);
  }
}
