import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleEditComponent } from './vehicle/vehicle-edit/vehicle-edit.component';
import { VehicleDetailsComponent } from './vehicle/vehicle-details/vehicle-details.component';

const appRoutes: Route[] = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'inventory',
    component: InventoryComponent,
  },
  {
    path: 'vehicle',
    children: [
      {
        path: ':id/edit',
        component: VehicleEditComponent,
      },
      {
        path: ':id',
        component: VehicleDetailsComponent,
      },
      {
        path: '',
        component: VehicleComponent,
      },
    ],
  },
  {
    path: '**', redirectTo: '/home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
