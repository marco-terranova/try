import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScanQrPage } from './scan-qr.page';

const routes: Routes = [{ path: '', component: ScanQrPage }];

@NgModule({
  imports: [
    ScanQrPage,
    RouterModule.forChild(routes)
  ]
})
export class ScanQrPageModule {}
