import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  AlertController,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonSelect,
  IonSelectOption,
  IonTabBar,
  IonTabButton,
  IonToolbar,
} from '@ionic/angular/standalone';
import { RouterModule, Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  add,
  businessOutline,
  checkmarkCircleOutline,
  createOutline,
  cubeOutline,
  homeOutline,
  listOutline,
  locationOutline,
  personOutline,
  scanOutline,
  searchOutline,
} from 'ionicons/icons';
import { DatabaseService } from '../services/database';
import { NavigationHistoryService } from '../services/navigation-history';

@Component({
  selector: 'app-crea-box',
  templateUrl: './crea-box.page.html',
  styleUrls: ['./crea-box.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonSelect,
    IonSelectOption,
    IonTabBar,
    IonTabButton,
    IonToolbar,
  ]
})
export class CreaBoxPage implements OnInit {
  nome_box: string = '';
  descrizione: string = '';
  rif_armadio: string = '';
  is_preferito: boolean = false;
  dimensione: string = 'piccola';
  armadi_disponibili: any[] = [];
  utenteId: string = '';
  tipoProfilo: string = 'personal';

  constructor(
    private alertController: AlertController,
    private router: Router,
    private dbService: DatabaseService,
    private navHistory: NavigationHistoryService
  ) {
    addIcons({
      add,
      businessOutline,
      checkmarkCircleOutline,
      createOutline,
      cubeOutline,
      homeOutline,
      listOutline,
      locationOutline,
      personOutline,
      scanOutline,
      searchOutline,
    });
  }

  ngOnInit() {
    this.utenteId = localStorage.getItem('utente_id') || '';
    this.tipoProfilo = localStorage.getItem('tipo_profilo') || 'personal';
    if (this.utenteId) {
      this.caricaArmadi();
    }
  }

  caricaArmadi() {
    this.dbService.getArmadi(this.utenteId).subscribe({
      next: (res: any) => { this.armadi_disponibili = res.armadi || []; },
      error: (err: any) => console.error(err)
    });
  }

  async aggiungiArmadio(event: Event) {
    event.preventDefault();
    const alert = await this.alertController.create({
      cssClass: 'peekbox-alert',
      header: 'Nuovo Spazio',
      inputs: [{ name: 'nome_armadio', type: 'text', placeholder: 'Es. Ripostiglio, Garage...' }],
      buttons: [
        { text: 'Annulla', role: 'cancel' },
        {
          text: 'Aggiungi',
          handler: (dati) => {
            if (dati.nome_armadio?.trim()) {
              this.dbService.creaArmadio(dati.nome_armadio.trim(), this.utenteId).subscribe({
                next: (res: any) => {
                  this.caricaArmadi();
                  this.rif_armadio = res.id.toString();
                },
                error: (err: any) => console.error(err)
              });
            }
          }
        }
      ]
    });
    await alert.present();
  }

  salvaNuovaBox() {
    if (!this.nome_box || !this.rif_armadio) return;
    this.dbService.creaBox(this.nome_box, this.rif_armadio, this.is_preferito, false, this.descrizione, this.dimensione).subscribe({
      next: () => { this.navHistory.navTo('/home'); },
      error: (err: any) => console.error(err)
    });
  }

  navTo(route: string) { this.navHistory.navTo(route); }

}
