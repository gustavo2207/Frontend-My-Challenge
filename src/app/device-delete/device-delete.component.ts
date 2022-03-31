import { Component, OnInit } from '@angular/core';
import { Device } from '../Device';
import { DeviceService } from '../Device.service';

@Component({
  selector: 'app-device-delete',
  templateUrl: './device-delete.component.html',
  styleUrls: ['./device-delete.component.css'],
})
export class DeviceDeleteComponent implements OnInit {
  devices: Device[] = [];

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {}

  delete(partNumber: String): void {
    this.deviceService.deleteDevice(partNumber).subscribe();
  }
}
