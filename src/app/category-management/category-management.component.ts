import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css'],
  animations: [
    trigger('openClose', [
      state("open", style({
        opacity: 1
      })),
      state("closed", style({
        opacity:0.8
      })),
      transition('open <=> closed', [
        animate('0.5')
      ])
    ])
  ]
})
export class CategoryManagementComponent implements OnInit {

  @Input() isActive!:Boolean
  @Input() showDefault!: Boolean

  showCreate:Boolean = false
  showRead:Boolean = false
  showDelete:Boolean = false
  updateCategories: Boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    if(this.showDefault){
      this.showCreate = true
      this.showDefault = false
    }
  }

  updateReadStatus(){
    this.updateCategories = true
    this.updateCategories = false
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
