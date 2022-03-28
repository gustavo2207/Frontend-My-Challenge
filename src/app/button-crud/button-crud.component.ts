import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-crud',
  templateUrl: './button-crud.component.html',
  styleUrls: ['./button-crud.component.css']
})
export class ButtonCrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  btnCreate(){
    const isDevice = document.querySelector("#btn-device")?.classList.contains("device");
    const isCategory = document.querySelector("#btn-category")?.classList.contains("category");
    if(isDevice) {
      document.querySelector("#create-device")?.classList.remove("hide")
      document.querySelector("#read-device")?.classList.add("hide")
      document.querySelector("#delete-device")?.classList.add("hide")
    } else if(isCategory){
      document.querySelector("#create-category")?.classList.remove("hide")
      document.querySelector("#read-category")?.classList.add("hide")
      document.querySelector("#delete-category")?.classList.add("hide")
    }
  }
  btnRead(){
    const isDevice = document.querySelector("#btn-device")?.classList.contains("device");
    const isCategory = document.querySelector("#btn-category")?.classList.contains("category");
    if(isDevice){
      document.querySelector("#create-device")?.classList.add("hide")
      document.querySelector("#read-device")?.classList.remove("hide")
      document.querySelector("#delete-device")?.classList.add("hide")
    } else if(isCategory){
      document.querySelector("#create-category")?.classList.add("hide")
      document.querySelector("#read-category")?.classList.remove("hide")
      document.querySelector("#delete-category")?.classList.add("hide")
    }
  }

  btnDelete(){
    const isDevice = document.querySelector("#btn-device")?.classList.contains("device");
    const isCategory = document.querySelector("#btn-category")?.classList.contains("category");
    if(isDevice) {
      document.querySelector("#create-device")?.classList.add("hide")
      document.querySelector("#read-device")?.classList.add("hide")
      document.querySelector("#delete-device")?.classList.remove("hide")
    } else if (isCategory) {
      document.querySelector("#create-category")?.classList.add("hide")
      document.querySelector("#read-category")?.classList.add("hide")
      document.querySelector("#delete-category")?.classList.remove("hide")
    }
  }
  

}
