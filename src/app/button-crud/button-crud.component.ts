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
    const isDevice = document.
    querySelector("#group-btn")?.classList.contains("device");

    if(isDevice){
      document.querySelector("#create-device")?.classList.replace("hide", "none")
      document.querySelector("#read-device")?.classList.add("hide", "hide")
      document.querySelector("#delete-device")?.classList.add("hide", "hide")
    }
  }
  btnRead(){
    const isDevice = document.
    querySelector("#group-btn")?.classList.contains("device");

    if(isDevice){
      document.querySelector("#create-device")?.classList.add("hide", "hide")
      document.querySelector("#read-device")?.classList.replace("hide", "none")
      document.querySelector("#delete-device")?.classList.add("hide", "hide")
    }
  }

  btnDelete(){
    const isDevice = document.
    querySelector("#group-btn")?.classList.contains("device");

    if(isDevice){
      document.querySelector("#create-device")?.classList.add("hide", "hide")
      document.querySelector("#read-device")?.classList.add("hide", "hide")
      document.querySelector("#delete-device")?.classList.replace("hide", "none")
    }
  }
  

}
