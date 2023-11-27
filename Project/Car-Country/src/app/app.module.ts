import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { InventoryComponent } from './inventory/inventory.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { VehicleEditComponent } from './vehicle/vehicle-edit/vehicle-edit.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { VehicleDetailsComponent } from './vehicle/vehicle-details/vehicle-details.component';

import { FilterPipe } from './inventory/inventory-list/filter.pipe';
import { FeaturedComponent } from './vehicle/featured/featured.component';

@NgModule({
  declarations: [
    FilterPipe,
    AppComponent,
    HomeComponent,
    VehicleComponent,
    FeaturedComponent,
    InventoryComponent,
    NavigationComponent,
    VehicleEditComponent,
    InventoryListComponent,
    VehicleDetailsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CarouselModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
