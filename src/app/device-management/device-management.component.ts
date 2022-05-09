import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-device-management',
  templateUrl: './device-management.component.html',
  styleUrls: ['./device-management.component.css'],
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
      transition(':leave', [animate('200ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
})
export class DeviceManagementComponent implements OnInit {
  @Input() isActive!: Boolean;
  @Input() showDefault!: Boolean;
  @Output() newCategoryEvent = new EventEmitter();

  showCreate: Boolean = false;
  showRead: Boolean = false;
  updateRead: Boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngDoCheck() {
    if (this.showDefault) {
      this.showRead = true;
      this.showDefault = false;
    }
  }

  createOption() {
    if (this.isActive) {
      this.showCreate = true;
      this.showRead = false;
    }
  }

  updateReadStatus() {
    this.updateRead = true;
    this.updateRead = false;
  }

  readOption() {
    if (this.isActive) {
      this.showCreate = false;
      this.showRead = true;
    }
  }

  createNewCategory(event: any): void {
    event.preventDefault();
    this.newCategoryEvent.emit();
  }
}
