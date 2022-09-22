import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {

  username:string;
  
  constructor(
      private router:Router,
      private activatedRouter:ActivatedRoute,

  ) {
    this.activatedRouter.queryParams.subscribe(params=>{

      if(this.router.getCurrentNavigation().extras.state)
      {
        let usuario=this.router.getCurrentNavigation().extras.state.usr;
        console.log("Llego" + usuario.username);
        this.username=usuario.username;
      }
      
    })

  }

}

