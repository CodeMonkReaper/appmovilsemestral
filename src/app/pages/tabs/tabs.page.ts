import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';



@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit{

  nombre:String='';
  constructor(private storage: Storage, private router: Router) {}

  cerrarSesion(){
    this.cerrarSesion();
    this.router.navigate(['/loginpage']);
  }

  ngOnInit(){
      this.vernombre();
      console.log('a');
  }
  async cerrar()
  {
    await this.storage.set('sesion', null);
  }

  async vernombre()
  {
    this.nombre=await this.storage.get('sesion');
  }
}

