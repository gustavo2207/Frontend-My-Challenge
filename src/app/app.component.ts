import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isCategory: Boolean = false
  isDevice: Boolean = false

  title = 'my-challenge';

  handleCategory(){
    this.isCategory = !this.isCategory
    this.isDevice = false
  }

  handleDevice(){
    this.isDevice = !this.isDevice
    this.isCategory = false
  }
}
