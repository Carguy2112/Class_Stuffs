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
      'https://i.postimg.cc/Ss1VpHzg/2873669-40-revo.jpg',
      'https://cf-img.autorevo.com/2018-gmc-sierra-1500-jackson-mo-7245436/724x724/2873669-49-revo.jpg?_=1695222298',
      'https://cf-img.autorevo.com/2018-gmc-sierra-1500-jackson-mo-7245436/724x724/2873669-50-revo.jpg?_=1695222298',
      'https://cf-img.autorevo.com/2018-gmc-sierra-1500-jackson-mo-7245436/724x724/2873669-19-revo.jpg?_=1695222298',
      'https://cf-img.autorevo.com/2018-gmc-sierra-1500-jackson-mo-7245436/724x724/2873669-37-revo.jpg?_=1695222298',
      "This GMC is equipped with 4 Wheel Drive, Leather, Navigation, Power/Heated/Cooled Seats, Sunroof, Back up Camera, Cruise, AM/FM/CD/AUX/Phone, Power Windows/Locks/Mirrors & more! It has a Ecotec 5.3L V8 Engine, an Automatic Transmission and 149xxx miles. We have financing available and we accept trades!"
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
      'https://cf-img.autorevo.com/2014-bmw-3-series-jackson-mo-7247475/724x724/2875869-43-revo.jpg?_=1699543357',
      '',//profile
      '',//rear
      '',//interior
      '',//engine
      ''//details
    ),
    new Vehicle(
      2015,
      'Audi',
      'A3',
      '2.0T quattro Prestige',
      'Gray',
      'Black Leather',
      '2.0L Turbo 4 Cyl.',
      'Automatic',
      'Awd',
      109845,
      '17,900',
      'https://cf-img.autorevo.com/2015-audi-a3-jackson-mo-7262324/724x724/2898122-12-revo.jpg?_=1699978422',
      'https://cf-img.autorevo.com/2015-audi-a3-jackson-mo-7262324/724x724/2898122-0-revo.jpg?_=1699978422',//profile
      'https://cf-img.autorevo.com/2015-audi-a3-jackson-mo-7262324/724x724/2898122-3-revo.jpg?_=1699978422',//rear
      'https://cf-img.autorevo.com/2015-audi-a3-jackson-mo-7262324/724x724/2898122-33-revo.jpg?_=1699978422',//interior
      'https://cf-img.autorevo.com/2015-audi-a3-jackson-mo-7262324/724x724/2898122-8-revo.jpg?_=1699978422',//engine
      'This Audi is equipped with All Wheel Drive, Leather, Navigation, Heated Seats, Back up Camera, Cruise, AM/FM/Bluetooth, Power Windows/Locks/Mirrors & more! It has a 2.0L Turbo 4 Cylinder Engine, an Automatic Transmission and 109xxx miles. We have financing available and we accept trades!'//details
    ),
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
      'https://i.postimg.cc/Ss1VpHzg/2873669-40-revo.jpg',
      'https://cf-img.autorevo.com/2018-gmc-sierra-1500-jackson-mo-7245436/724x724/2873669-49-revo.jpg?_=1695222298',
      'https://cf-img.autorevo.com/2018-gmc-sierra-1500-jackson-mo-7245436/724x724/2873669-50-revo.jpg?_=1695222298',
      'https://cf-img.autorevo.com/2018-gmc-sierra-1500-jackson-mo-7245436/724x724/2873669-19-revo.jpg?_=1695222298',
      'https://cf-img.autorevo.com/2018-gmc-sierra-1500-jackson-mo-7245436/724x724/2873669-37-revo.jpg?_=1695222298',
      "This GMC is equipped with 4 Wheel Drive, Leather, Navigation, Power/Heated/Cooled Seats, Sunroof, Back up Camera, Cruise, AM/FM/CD/AUX/Phone, Power Windows/Locks/Mirrors & more! It has a Ecotec 5.3L V8 Engine, an Automatic Transmission and 149xxx miles. We have financing available and we accept trades!"
    ),
    /**
    new Vehicle(
      ,//year
      '',//make
      '',//model
      '',//trim
      '',//ext color
      '',//interior color
      '',//engine
      '',//transmission
      '',//drive
      ,//miles
      '',//price
      '',//coverImagePath
      '',//profile
      '',//rear
      '',//interior
      '',//engine
      ''//details
    ),
    */

  ];


  getVehicle(idx: number) {
    return this.allVehicles.slice()[idx];
  }

  getVehicles() {
    return this.allVehicles.slice();
  }
}
