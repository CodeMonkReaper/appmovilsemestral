import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViajesService } from 'src/app/services/viajes.service';


@Component({
  selector: 'app-programar-viaje',
  templateUrl: './programar-viaje.page.html',
  styleUrls: ['./programar-viaje.page.scss'],
})
export class ProgramarViajePage implements OnInit{
  categories =[]
  categorySelectedCategory

  newTaskObj = {}
  itemName
  itemSurName
  itemDueDate
  itemPriority
  itemCategory


    constructor(public modalCtlr: ModalController, public viajesService: ViajesService) {

  }

  ngOnInit() {
    this.categories.push('Pasajero')
  }

  async add(){
    this.newTaskObj = ({itemName:this.itemName, itemSurname:this.itemSurName, itemDueDate:this.itemDueDate,
      itemPriority:this.itemPriority,itemCategory:this.categorySelectedCategory});
    console.log(this.newTaskObj)
    let uid = this.itemName + this.itemSurName + this.itemDueDate
    if(uid){
      await this.viajesService.addTask(uid,this.newTaskObj)
    }else{
      console.log('No puede estar Vacio');
    }
    this.dismis()
  }

  selectCategory(index){
    this.categorySelectedCategory = this.categories[index];
    console.log(this.categorySelectedCategory)
  }

  async dismis(){
    await this.modalCtlr.dismiss(this.newTaskObj)
  }

}
