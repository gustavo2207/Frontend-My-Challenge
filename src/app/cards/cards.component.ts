import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }

  manageDevices(event: any) {
    event.preventDefault();
    const isShow = document.querySelector("#btn-device")?.classList.contains("hide")

    if(isShow){
      document.querySelector("#btn-device")?.classList.remove("hide")
      document.querySelector("#create-device")?.classList.remove("hide")
    } else {
      document.querySelector("#btn-device")?.classList.add("hide")
      document.querySelector("#create-device")?.classList.add("hide")
      document.querySelector("#read-device")?.classList.add("hide")
      document.querySelector("#delete-device")?.classList.add("hide")
    }

    document.querySelector("#group-btn")?.classList.add("device")
    document.querySelector("#group-btn")?.classList.remove("category")
  }

}
