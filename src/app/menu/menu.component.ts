import { Component, OnInit } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  methodsManage = new CardsComponent;
  constructor() { }

  ngOnInit(): void {
  }

  isDeviceManage(event: any){
    this.methodsManage.manageDevices(event);
  }

  isCategoryManage(event: any){
    this.methodsManage.manageCategory(event);
  }

}
