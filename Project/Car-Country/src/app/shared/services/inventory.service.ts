import { Injectable } from "@angular/core";
import { Vehicle } from "src/app/vehicle/vehicle.model";


@Injectable({
  providedIn: 'root',
})
export class InventoryService {

  private allVehicles: Vehicle[] = [
    new Vehicle(
      'truck',
      2018,
      'GMC',
      'Sierra',
      'SLT Z71',
      'White',
      'Black Leather',
      'EcoTec3 5.3L V8',
      'Automatic',
      '4X4',
       '149,091',
      '28,900',
      'https://i.postimg.cc/Ss1VpHzg/2873669-40-revo.jpg',
      'https://cf-img.autorevo.com/2018-gmc-sierra-1500-jackson-mo-7245436/724x724/2873669-49-revo.jpg?_=1695222298',
      'https://cf-img.autorevo.com/2018-gmc-sierra-1500-jackson-mo-7245436/724x724/2873669-50-revo.jpg?_=1695222298',
      'https://cf-img.autorevo.com/2018-gmc-sierra-1500-jackson-mo-7245436/724x724/2873669-19-revo.jpg?_=1695222298',
      'https://cf-img.autorevo.com/2018-gmc-sierra-1500-jackson-mo-7245436/724x724/2873669-37-revo.jpg?_=1695222298',
      "This GMC is equipped with 4 Wheel Drive, Leather, Navigation, Power/Heated/Cooled Seats, Sunroof, Back up Camera, Cruise, AM/FM/CD/AUX/Phone, Power Windows/Locks/Mirrors & more! It has a Ecotec 5.3L V8 Engine, an Automatic Transmission and 149xxx miles. We have financing available and we accept trades!"
    ),
    new Vehicle(
      'sedan',
      2014,
      'BMW',
      '3 Series 328i',
      '',
      'Silver',
      'Black Leather',
      '3.0L I6',
      'Automatic',
      'Rwd',
       '96,913',
      '11,900',
      'https://cf-img.autorevo.com/2011-bmw-328i-jackson-mo-7250071/724x724/2878222-31-revo.jpg?_=1696010626',
      'https://cf-img.autorevo.com/2011-bmw-328i-jackson-mo-7250071/724x724/2878222-39-revo.jpg?_=1696010626',//profile
      'https://cf-img.autorevo.com/2011-bmw-328i-jackson-mo-7250071/724x724/2878222-29-revo.jpg?_=1696010626',//rear
      'https://cf-img.autorevo.com/2011-bmw-328i-jackson-mo-7250071/724x724/2878222-17-revo.jpg?_=1696010626',//interior
      'https://cf-img.autorevo.com/2011-bmw-328i-jackson-mo-7250071/724x724/2878222-35-revo.jpg?_=1696010626',//engine
      'This BMW is equipped with Rear Wheel Drive, Leather, Navigation, Power/Heated Seats, Sunroof, Cruise, AM/FM/CD/Phone, Power Windows/Locks/Mirrors & more! It has a 3.0L 6 Cylinder Engine, an Automatic Transmission and only 96xxx miles! We have financing available and we accept trades!'//details
    ),
    new Vehicle(
      'coupe',
      2015,
      'Audi',
      'A3',
      '2.0T quattro Prestige',
      'Gray',
      'Black Leather',
      '2.0L Turbo 4 Cyl.',
      'Automatic',
      'Awd',
      '109,845',
      '17,900',
      'https://cf-img.autorevo.com/2015-audi-a3-jackson-mo-7262324/724x724/2898122-12-revo.jpg?_=1699978422',
      'https://cf-img.autorevo.com/2015-audi-a3-jackson-mo-7262324/724x724/2898122-0-revo.jpg?_=1699978422',//profile
      'https://cf-img.autorevo.com/2015-audi-a3-jackson-mo-7262324/724x724/2898122-3-revo.jpg?_=1699978422',//rear
      'https://cf-img.autorevo.com/2015-audi-a3-jackson-mo-7262324/724x724/2898122-33-revo.jpg?_=1699978422',//interior
      'https://cf-img.autorevo.com/2015-audi-a3-jackson-mo-7262324/724x724/2898122-8-revo.jpg?_=1699978422',//engine
      'This Audi is equipped with All Wheel Drive, Leather, Navigation, Heated Seats, Back up Camera, Cruise, AM/FM/Bluetooth, Power Windows/Locks/Mirrors & more! It has a 2.0L Turbo 4 Cylinder Engine, an Automatic Transmission and 109xxx miles. We have financing available and we accept trades!'//details
    ),
    new Vehicle(
      'truck',
      2012,
      'Chevrolet',
      'Silverado',
      '1500 LTZ',
      'Silver',
      'Black Leather',
      'Vortec 6.2L V8',
      'Automatic',
      '4X4',
       '187,254',
      '18,900',
      'https://cf-img.autorevo.com/2012-chevrolet-silverado-1500-jackson-mo-7257525/724x724/2890688-1-revo.jpg?_=1698428484',
      'https://cf-img.autorevo.com/2012-chevrolet-silverado-1500-jackson-mo-7257525/724x724/2890688-7-revo.jpg?_=1698428484',
      'https://cf-img.autorevo.com/2012-chevrolet-silverado-1500-jackson-mo-7257525/724x724/2890688-14-revo.jpg?_=1698428484',
      'https://cf-img.autorevo.com/2012-chevrolet-silverado-1500-jackson-mo-7257525/724x724/2890688-28-revo.jpg?_=1698428484',
      'https://cf-img.autorevo.com/2012-chevrolet-silverado-1500-jackson-mo-7257525/724x724/2890688-25-revo.jpg?_=1698428484',
      "This Chevy is equipped with 4 Wheel Drive, Leather, Navigation, Power/Heated/Cooled Seats, Sunroof, Back up Camera, Cruise, AM/FM/CD/AUX, Power Windows/Locks/Mirrors & more! It has a Vortec 6.2L V8 Engine, an Automatic Transmission and 187xxx miles. We have financing available and we accept trades!"
    ),
    new Vehicle(
      'suv',//type
      2017,//year
      'Buick',//make
      'Encore',//model
      'Sport Touring',//trim
      'Gray',//ext color
      'Black Cloth/Leather',//interior color
      'Ecotec 1.4L Turbo 4 Cyl',//engine
      'Automatic',//transmission
      'Fwd',//drive
      '44,739',//miles
      '18,900',//price
      'https://cf-img.autorevo.com/2017-buick-encore-jackson-mo-7256225/724x724/2888731-33-revo.jpg?_=1698077291',//coverImagePath
      'https://cf-img.autorevo.com/2017-buick-encore-jackson-mo-7256225/724x724/2888731-44-revo.jpg?_=1698077291',//profile
      'https://cf-img.autorevo.com/2017-buick-encore-jackson-mo-7256225/724x724/2888731-35-revo.jpg?_=1698077291',//rear
      'https://cf-img.autorevo.com/2017-buick-encore-jackson-mo-7256225/724x724/2888731-17-revo.jpg?_=1698077291',//interior
      'https://cf-img.autorevo.com/2017-buick-encore-jackson-mo-7256225/724x724/2888731-30-revo.jpg?_=1698077291',//engine
      'This Encore is equipped with Front Wheel Drive, Power Driver Seat, Back up Camera, Sunroof, Cruise, AM/FM/AUX/Phone, Power Windows/Locks/Mirrors & more! It has a Ecotec 1.4L Turbo 4 Cylinder Engine, an Automatic Transmission and only 44xxx miles! We have financing available and we accept trades!'//details
    ),
    new Vehicle(
      'suv',//type
      2019,//year
      'Chevrolet',//make
      'Equinox',//model
      'LT',//trim
      'Blue',//ext color
      'Black Cloth',//interior color
      '1.5L Turbo 4 Cyl',//engine
      'Automatic',//transmission
      'Fwd',//drive
      '141,378',//miles
      '16,900',//price
      'https://cf-img.autorevo.com/2019-chevrolet-equinox-jackson-mo-7249593/724x724/2877624-46-revo.jpg?_=1695915592',//coverImagePath
      'https://cf-img.autorevo.com/2019-chevrolet-equinox-jackson-mo-7249593/724x724/2877624-37-revo.jpg?_=1695915592',//profile
      'https://cf-img.autorevo.com/2019-chevrolet-equinox-jackson-mo-7249593/724x724/2877624-48-revo.jpg?_=1695915592',//rear
      'https://cf-img.autorevo.com/2019-chevrolet-equinox-jackson-mo-7249593/724x724/2877624-19-revo.jpg?_=1695915592',//interior
      'https://cf-img.autorevo.com/2019-chevrolet-equinox-jackson-mo-7249593/724x724/2877624-33-revo.jpg?_=1695915592',//engine
      'This Equinox is equipped with Front Wheel Drive, Power Driver Seat, Heated Seats, Cruise, AM/FM/AUX/Phone, Power Windows/Locks/Mirrors & more! It has a 1.5L Turbo 4 Cylinder Engine, an Automatic Transmission and 141xxx miles. We have financing available and we accept trades!'//details
    ),
    new Vehicle(
      'minivan',//type
      2017,//year
      'Chrysler',//make
      'Pacifica',//model
      'Touring',//trim
      'White',//ext color
      'Black Leather',//interior color
      'Pentastar 3.6L V6',//engine
      'Automatic',//transmission
      'Fwd',//drive
      '124,985',//miles
      '16,900',//price
      'https://cf-img.autorevo.com/2017-chrysler-pacifica-jackson-mo-7247936/724x724/2875935-37-revo.jpg?_=1695660289',//coverImagePath
      'https://cf-img.autorevo.com/2017-chrysler-pacifica-jackson-mo-7247936/724x724/2875935-50-revo.jpg?_=1695660289',//profile
      'https://cf-img.autorevo.com/2017-chrysler-pacifica-jackson-mo-7247936/724x724/2875935-43-revo.jpg?_=1695660289',//rear
      'https://cf-img.autorevo.com/2017-chrysler-pacifica-jackson-mo-7247936/724x724/2875935-17-revo.jpg?_=1695660289',//interior
      'https://cf-img.autorevo.com/2017-chrysler-pacifica-jackson-mo-7247936/724x724/2875935-34-revo.jpg?_=1695660289',//engine
      'This Pacifica is equipped with Front Wheel Drive, 3rd Row, Leather, Navigation, Power Driver Seat, Heated Seats, Back up Camera, Cruise, AM/FM/AUX/Phone, Power Windows/Locks/Mirrors & more! It has a 3.6L V6 Engine, an Automatic Transmission and 124xxx miles. We have financing available and we accept trades!'//details
    ),
    /**
    new Vehicle(
      '',//type
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
