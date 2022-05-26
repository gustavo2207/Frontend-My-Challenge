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
  @Output() createdUpdate = new EventEmitter();

  devices: Device[] = [];
  categories: Category[] = [];
  deviceCategory: string = '';
  partNumber:string = "";
  color:string = ""

  constructor(
    private deviceService: DeviceService,
    private categoryServices: CategoryService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  add(): void {
    this.deviceCategory = this.deviceCategory.trim();
    this.color = this.color.trim();
    const deviceNumber:number = parseInt(this.partNumber);

    if (!this.deviceCategory && !this.color && !deviceNumber) return;

    this.createdUpdate.emit();

    this.deviceService
      .addDevice(
        { color: this.color, part_number: deviceNumber } as Device,
        this.deviceCategory
      )
      .subscribe((device) => {
        this.devices.push(device);
      });
      this.clear()
  }

  clear(){
    this.deviceCategory = ""
    this.partNumber = ""
    this.color = ""
  }

  getCategories(): void {
    this.categoryServices
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }
}
