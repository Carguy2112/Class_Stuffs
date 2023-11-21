import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { VehicleComponent } from './vehicle/vehicle.component';
import { InventoryComponent } from './inventory/inventory.component';
import { VehicleEditComponent } from './vehicle/vehicle-edit/vehicle-edit.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { VehicleDetailsComponent } from './vehicle/vehicle-details/vehicle-details.component';
import { FeaturedComponent } from './vehicle/featured/featured.component';


@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    VehicleComponent,
    VehicleEditComponent,
    NavigationComponent,
    HomeComponent,
    InventoryListComponent,
    VehicleDetailsComponent,
    FeaturedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
