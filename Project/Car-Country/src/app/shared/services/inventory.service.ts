import { Injectable } from "@angular/core";
import { Vehicle } from "src/app/vehicle/vehicle.model";


@Injectable({
  providedIn: 'root',
})
export class InventoryService {

  private allVehicles: Vehicle[] = [
    new Vehicle(
      2018,
      'GMC',
      'Sierra',
      'SLT Z71',
      'White',
      'Black Leather',
      'EcoTec3 5.3L V8',
      'Automatic',
      '4X4',
       149091,
      '28,900',
      'https://cf-img.autorevo.com/2018-gmc-sierra-1500-jackson-mo-7245436/724x724/2873669-40-revo.jpg?_=1695222298'
    ),
    new Vehicle(
      2014,
      'BMW',
      '3 Series 335i',
      'xDrive Gran Turismo',
      'Black',
      'Black Leather',
      '3.0L Turbo I6',
      'Automatic',
      'Awd',
       51725,
      '19,900',
      'https://cf-img.autorevo.com/2014-bmw-3-series-jackson-mo-7247475/724x724/2875869-43-revo.jpg?_=1699543357'
    )
  ];


  getVehicle(idx: number) {
    return this.allVehicles.slice()[idx];
  }

  getVehicles() {
    return this.allVehicles.slice();
  }
}
