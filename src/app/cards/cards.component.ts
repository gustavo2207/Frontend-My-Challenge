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

    const isCategory = document
    .querySelector("#btn-category")?.classList.contains("category")

    if(isCategory) {
      document.querySelector("#btn-category")?.classList.replace("category", "hide")
      document.querySelector("#btn-device")?.classList.add("hide")
      document.querySelector("#create-device")?.classList.add("hide")
      document.querySelector("#read-device")?.classList.add("hide")
      document.querySelector("#delete-device")?.classList.add("hide")
    }

    if(isShow){
      document.querySelector("#btn-device")?.classList.remove("hide")
      document.querySelector("#create-device")?.classList.remove("hide")
    } else {
      document.querySelector("#btn-device")?.classList.add("hide")
      document.querySelector("#create-device")?.classList.add("hide")
      document.querySelector("#read-device")?.classList.add("hide")
      document.querySelector("#delete-device")?.classList.add("hide")
    }

    document.querySelector("#btn-device")?.classList.toggle("device")
    document.querySelector("#btn-category")?.classList.remove("category")
  }

  manageCategory(event: any){
    event.preventDefault();

    const isShow = document.querySelector("#btn-category")?.classList.contains("hide");

    const isDevice = document
    .querySelector("#btn-device")?.classList.contains("device")

    if(isDevice) {
      document.querySelector("#btn-device")?.classList.replace("device", "hide")
      document.querySelector("#btn-category")?.classList.add("hide")
      document.querySelector("#create-category")?.classList.add("hide")
      document.querySelector("#read-category")?.classList.add("hide")
      document.querySelector("#delete-category")?.classList.add("hide")
    }
    if(isShow) {
      document.querySelector("#btn-category")?.classList.remove("hide")
      document.querySelector("#create-category")?.classList.remove("hide")
    }
    else {
      document.querySelector("#btn-category")?.classList.add("hide")
      document.querySelector("#create-category")?.classList.add("hide")
      document.querySelector("#read-category")?.classList.add("hide")
      document.querySelector("#delete-category")?.classList.add("hide")
    }
    document.querySelector("#btn-category")?.classList.toggle("category")
    document.querySelector("#btn-device")?.classList.remove("device")
  }

}
