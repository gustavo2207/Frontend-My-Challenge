
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-management',
  templateUrl: './device-management.component.html',
  styleUrls: ['./device-management.component.css']
})
export class DeviceManagementComponent implements OnInit {

  @Input() isActive!:Boolean
  @Input() showDefault!: Boolean

  showCreate:Boolean = false
  showRead:Boolean = false
  showDelete:Boolean = false

  constructor() {
  }

  ngOnInit(): void {
  }

  ngDoCheck(){
    if(this.showDefault){
      this.showCreate = true
      this.showDefault = false
    }
  }

  createOption(){
    if(this.isActive){
      this.showCreate = true
      this.showRead = false
      this.showDelete = false
    }
  }

  readOption(){
    if(this.isActive){
      this.showCreate = false
      this.showRead = true
      this.showDelete = false
    }
  }

  deleteOption(){
    if(this.isActive){
      this.showCreate = false
      this.showRead = false
      this.showDelete = true
    }
  }

}
