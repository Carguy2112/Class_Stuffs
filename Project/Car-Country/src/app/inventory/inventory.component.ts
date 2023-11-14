import { Component } from '@angular/core';

import { Vehicle } from '../vehicle/vehicle.model';
import { InventoryService } from '../shared/services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent {
   myVehicles: Vehicle[] = [];

   constructor(
    private inventoryService: InventoryService,
   ){}
}
