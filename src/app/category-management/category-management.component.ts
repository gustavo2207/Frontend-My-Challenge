import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css'],
  animations: [
    trigger('openClosed', [
      transition(':enter', [
        style({
          position: 'absolute',
          top: 0,
          left: '-10%',
          width: '100%',
        }),
        animate('200ms ease-in-out', style({ opacity: 1, left: 0 })),
      ]),
      transition(':leave', [
        animate('200ms ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class CategoryManagementComponent implements OnInit {
  @Input() isActive!: Boolean;
  @Input() showDefault!: Boolean;
  @Input() newCategory!: Boolean;

  showCreate: Boolean = false;
  showRead: Boolean = false;
  updateCategories: Boolean = false;
  isOpen!: Boolean;

  constructor() {}

  ngOnInit(): void {}

  ngDoCheck() {
    if (this.showDefault) {
      this.showRead = true;
      this.showDefault = false;
    }
    if (this.newCategory) {
      this.showCreate = true;
      this.newCategory = false;
      this.showRead = false;
    }
  }

  updateReadStatus() {
    this.updateCategories = true;
    this.updateCategories = false;
  }

  createOption() {
    if (this.isActive) {
      this.showCreate = true;
      this.showRead = false;
    }
  }

  readOption() {
    if (this.isActive) {
      this.showCreate = false;
      this.showRead = true;
    }
  }
}
