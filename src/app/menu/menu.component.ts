import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() newDeviceEventMenu = new EventEmitter();
  @Output() newCategoryEventMenu = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  isDeviceManage(event: any){
    event.preventDefault()
    this.newDeviceEventMenu.emit();
  }

  isCategoryManage(event: any){
    event.preventDefault()
    this.newCategoryEventMenu.emit();
  }

}
