import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-conductores-disp',
  templateUrl: './conductores-disp.page.html',
  styleUrls: ['./conductores-disp.page.scss'],
})
export class ConductoresDispPage {

  handlerMessage = '';
  roleMessage = '';

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Rechazado';
          },
        },
        {
          text: 'Confirmar',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Conductor Confirmado';
          },
        },
      ],
    });

    await alert.present();

  }
}
