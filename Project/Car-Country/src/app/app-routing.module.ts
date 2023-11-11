import { Route, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { VehicleComponent } from "./vehicle/vehicle.component";
import { VehicleEditComponent } from "./vehicle/vehicle-edit/vehicle-edit.component";
import { InventoryComponent } from "./inventory/inventory.component";


const appRoutes: Route[] = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'vehicle',
    component: VehicleComponent,
    children: [
      {
        path: '',
        component: VehicleComponent,
      },
      {
        path: 'edit',
        component: VehicleEditComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
