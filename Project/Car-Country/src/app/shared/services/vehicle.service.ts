import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Vehicle } from "src/app/vehicle/vehicle.model";


@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  vehicleSelected = new Subject<Vehicle>();

  private inventory: Vehicle[] =[
    new Vehicle(
      2018,
      'GMC',
      'Sierra SLT Z71',
      'https://cf-img.autorevo.com/2018-gmc-sierra-1500-jackson-mo-7245436/724x724/2873669-40-revo.jpg?_=1695222298'
    ),
  ]
}
