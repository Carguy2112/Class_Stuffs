import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VehicleComponent } from './vehicle/vehicle.component';
import { InventoryComponent } from './inventory/inventory.component';
import { VehicleEditComponent } from './vehicle/vehicle-edit/vehicle-edit.component';
import { NavigationComponent } from './shared/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    VehicleComponent,
    VehicleEditComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
