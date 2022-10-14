import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViajesService } from 'src/app/services/viajes.service';

@Component({
  selector: 'app-update-travel',
  templateUrl: './update-travel.page.html',
  styleUrls: ['./update-travel.page.scss'],
})
export class UpdateTravelPage implements OnInit {
  @Input() task
  categories =[]
  categorySelectedCategory

  newTaskObj = {}
  itemName
  itemSurName
  itemDueDate 
  itemPriority
  itemCategory

  constructor(public modalCtlr: ModalController, public viajesService: ViajesService) { }

  ngOnInit() {
    this.categories.push('Pasajero')

    this.itemName = this.task.value.itemName
    this.itemDueDate = this.task.value.itemDueDate
    this.itemPriority = this.task.value.itemPriority
    this.categorySelectedCategory = this.task.value.itemCategory

  }
  selectCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async dismis(){
    await this.modalCtlr.dismiss()
  }

  async update(){
    this.newTaskObj = ({itemName:this.itemName, itemDueDate:this.itemDueDate,
      itemPriority:this.itemPriority,itemCategory:this.categorySelectedCategory});
    let uid = this.task.key
    await this.viajesService.updateTask(uid,this.newTaskObj)
    this.dismis()
  }
}