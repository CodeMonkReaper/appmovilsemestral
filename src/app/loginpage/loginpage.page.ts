import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {

  usuario =
    {
      username: '',
      password: ''
    }

  constructor(private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.usuario.username == "admin" && this.usuario.password == "0000") {
      console.log("Ok");
      let navigationExtras: NavigationExtras = {
        state: {
          usr: this.usuario,
          algo: 'algo',
        }
      }
      console.log(navigationExtras);

      this.router.navigate(['/tabs/mis-viajes'], navigationExtras);


    }
    else {
      console.log("Denegado");
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Acceso Denegado',
      subHeader: '',
      message: 'Usuario no existe',
      cssClass: 'mialerta',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'Aceptar',
          role: 'confirm',
          handler: () => {
            console.log('Alert confirmed');
          },
        },
      ],
      mode: 'ios',
      backdropDismiss: false
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log(`Dismissed with role: ${role}`);
  }
}
