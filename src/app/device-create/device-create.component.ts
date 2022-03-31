import { Component, OnInit } from '@angular/core';
import { Device } from '../Device';
import { DeviceService } from '../Device.service';

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.css']
})
export class DeviceCreateComponent implements OnInit {

  devices: Device[] = []
  
  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
  }

}
