import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViajesService } from 'src/app/services/viajes.service';
import { UpdateTravelPage } from '../update-travel/update-travel.page';



@Component({
  selector: 'app-mis-viajes',
  templateUrl: './mis-viajes.page.html',
  styleUrls: ['./mis-viajes.page.scss'],
})
export class MisViajesPage{
  travelList = [];

  today: number = Date.now();

  constructor(public modalCtlr: ModalController, public viajesService: ViajesService) {
    this.getAllTask()
  }

  async addNewItem() {
    const modal = await this.modalCtlr.create({
      component: MisViajesPage,
    });
    modal.onDidDismiss().then(newTask =>{
      this.getAllTask()
    });
    return await modal.present();
  }

  getAllTask(){
    this.travelList = this.viajesService.getAllTasks()
    console.log(this.viajesService.getAllTasks())
  }

  delete(key) {
    this.viajesService.deleteTask(key);
    this.getAllTask()
  }

  async update(selectedTask){
    const modal = await this.modalCtlr.create({
      component: UpdateTravelPage,
      componentProps: {task: selectedTask}
    })

    modal.onDidDismiss().then(()=>{
      this.getAllTask();
    })
    return await modal.present();
  }
}
