import { Component } from '@angular/core';
import {CityService} from "../main-content/city-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public  cityService: CityService) {}
  changeCity(city: string) {
    console.log('changeCity called with city:', city)
    this.cityService.changeCity(city);
  }
}
