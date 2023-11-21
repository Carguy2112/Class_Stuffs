import { Component } from '@angular/core';

import { Vehicle } from '../vehicle/vehicle.model';
import { InventoryService } from '../shared/services/inventory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  myVehicles: Vehicle[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(){
    this.myVehicles = this.inventoryService.getVehicles();
  };
}
