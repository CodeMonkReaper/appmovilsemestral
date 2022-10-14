import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario:Usuario={
    username:'',
    password:''
  };

  constructor(private storage:Storage,private router:Router) { }

  ngOnInit() {
  }

  onSubmit()
  {
    console.log(this.usuario);
    this.guardar();
  }

  async guardar()
  {
    let existe=await this.storage.get(this.usuario.username);

    if(existe==null)
    {
      await this.storage.set(this.usuario.username,this.usuario);
      console.log('User Create');
      this.router.navigate(['/loginpage']);
    }
    else {
      console.log('Usuario existe')
    }
  }

}

