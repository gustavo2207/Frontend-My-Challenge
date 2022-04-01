import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Output() newCategoryEvent = new EventEmitter();
  @Output() newDeviceEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  showCategoryManagement(event: any): void {
    event.preventDefault();
    this.newCategoryEvent.emit();
  }

  showDeviceManagement(event: any): void {
    event.preventDefault();
    this.newDeviceEvent.emit();
  }
}
