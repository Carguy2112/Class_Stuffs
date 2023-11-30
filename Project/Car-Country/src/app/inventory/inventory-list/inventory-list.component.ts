import { Component } from '@angular/core';

import { Vehicle } from 'src/app/vehicle/vehicle.model';
import { InventoryService } from 'src/app/shared/services/inventory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent {
  myInventory: Vehicle[] = [];
  filteredType = '';

  constructor(
    private inventoryService: InventoryService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(){
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.type === undefined) {
        this.myInventory = this.inventoryService.getVehicles()
      }
      else {
        this.myInventory = this.inventoryService.getVehiclesByType(params.type)
      }

    })
  };

}
