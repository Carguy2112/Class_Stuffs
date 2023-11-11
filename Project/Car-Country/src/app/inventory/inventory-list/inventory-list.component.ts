import { Component } from '@angular/core';

import { Vehicle } from 'src/app/vehicle/vehicle.model';
import { InventoryService } from 'src/app/shared/services/inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent {
  myInventory: Vehicle[] = [];

  constructor(
    private inventoryService: InventoryService,
  ) {}

  ngOnInit(){
    this.myInventory = this.inventoryService.getVehicles();
  };

}
