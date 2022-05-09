import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isCategory: Boolean = false;
  isDevice: Boolean = false;
  isNewCategory: Boolean = false;

  title = 'my-challenge';

  handleCategory(newCategory?: Boolean) {
    this.isCategory = !this.isCategory;
    this.isDevice = false;
    if (newCategory) this.isNewCategory = true;
  }

  handleDevice() {
    this.isDevice = !this.isDevice;
    this.isCategory = false;
    this.isNewCategory = false;
  }
}
