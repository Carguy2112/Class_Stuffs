import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Vehicle } from '../vehicle.model';
import { InventoryService } from 'src/app/shared/services/inventory.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {
  vehicle: Vehicle;
  idx: number;

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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

}
