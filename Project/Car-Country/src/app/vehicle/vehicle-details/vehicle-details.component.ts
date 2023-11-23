import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Vehicle } from '../vehicle.model';
import { InventoryService } from 'src/app/shared/services/inventory.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {
  vehicle: Vehicle;
  idx: number;

  slides = [

  ]

  constructor(
    private route: ActivatedRoute,
    private inventoryService: InventoryService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.vehicle = this.inventoryService.getVehicle(this.idx);
    })
  }

}
