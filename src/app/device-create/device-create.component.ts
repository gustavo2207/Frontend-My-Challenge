import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../Category';
import { CategoryService } from '../category.service';
import { Device } from '../Device';
import { DeviceService } from '../Device.service';

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.css'],
})
export class DeviceCreateComponent implements OnInit {

  @Output() createdUpdate = new EventEmitter()

  devices: Device[] = [];
  categories: Category[] = []

  constructor(
    private deviceService: DeviceService,
    private categoryServices: CategoryService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  add(category: String, partNumber: any, color: String): void {
    category = category.trim();
    color = color.trim();
    partNumber = parseInt(partNumber);

    if (!category && !color && !partNumber) return;
    
    this.createdUpdate.emit()

    this.deviceService
      .addDevice({ color: color, part_number: partNumber } as Device, category)
      .subscribe((device) => {
        this.devices.push(device);
      });
  }

  getCategories(): void {
    this.categoryServices
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }
}
