import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CardsComponent } from './cards/cards.component';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { DeviceManagementComponent } from './device-management/device-management.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { DeviceCreateComponent } from './device-create/device-create.component';
import { ButtonCrudComponent } from './button-crud/button-crud.component';
import { CategoryReadComponent } from './category-read/category-read.component';
import { DeviceReadComponent } from './device-read/device-read.component';
import { DeviceDeleteComponent } from './device-delete/device-delete.component';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardsComponent,
    CategoryManagementComponent,
    DeviceManagementComponent,
    CategoryCreateComponent,
    DeviceCreateComponent,
    ButtonCrudComponent,
    CategoryReadComponent,
    DeviceReadComponent,
    DeviceDeleteComponent,
    CategoryDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
