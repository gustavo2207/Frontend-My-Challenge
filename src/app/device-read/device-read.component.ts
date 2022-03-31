import { Component, OnInit } from '@angular/core';
import { Device } from '../Device';
import { DeviceService } from '../Device.service';

@Component({
  selector: 'app-device-read',
  templateUrl: './device-read.component.html',
  styleUrls: ['./device-read.component.css']
})
export class DeviceReadComponent implements OnInit {

  devices: Device[] = []
  
  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.getDevices();
  }

  getDevices(): void {
    this.deviceService.getDevices()
    .subscribe(devices => this.devices = devices)
  }

}
