import { Component, Input } from '@angular/core';
import { Vehicle } from '../vehicle.model';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent {
  @Input() vehicle: Vehicle;
  @Input() idx: number;
}
