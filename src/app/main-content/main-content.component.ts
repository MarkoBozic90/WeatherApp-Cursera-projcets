import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CollectingDataService } from './collecting-data.service';
import {CityService} from "./city-service.service";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit, AfterViewInit {
  weatherDataBerliner?: any;

  selectedCity? = "Zemun"; // Default selected city

  constructor(
    private collectData: CollectingDataService,
    private cityService: CityService // Inject the CityService
  ) {}
  ngOnInit(): void {
    this.cityService.changeCity( 'Zemun');
    // Call the service method to fetch data when the component is initialized
    this.cityService.selectedCity$.subscribe((selectedCity) => {
      // Make API calls for the selected city here if needed
      console.log('selectedCity:', selectedCity);
      if (selectedCity === 'Berlin') {
        this.collectData.getForecastAndCurrentBerlin().subscribe({
          next: (data) => {
            this.weatherDataBerliner= data;
          },
          error: (err) => {
            console.error('There was an error!', err);
          }
        });
      } else if (selectedCity === 'Zemun') {
        this.collectData.getForecastAndCurrentZemun().subscribe({
          next: (data) => {
            this.weatherDataBerliner = data;
          },
          error: (err) => {
            console.error('There was an error!', err);
          }
        });
      }
    });
  }

  ngAfterViewInit() {
    // This lifecycle hook is called after the view has been initialized
    // You can now safely call the changeCity() function here
    this.cityService.selectedCity$.subscribe((selectedCity) => {
      this.changeCity(selectedCity);
    });
  }

  // Function to change the selected city
  changeCity(city: string) {
    console.log('changeCity called with city:', city);
    this.selectedCity = city;

    // Now, you can make the API call for the selected city here if needed.
    if (this.selectedCity === 'Berlin') {
      this.collectData.getForecastAndCurrentBerlin().subscribe({
        next: (data) => {
          this.weatherDataBerliner = data;
        },
        error: (err) => {
          console.error('There was an error!', err);
        }
      });
    } else if (this.selectedCity === 'Zemun') {
      this.collectData.getForecastAndCurrentZemun().subscribe({
        next: (data) => {
          this.weatherDataBerliner = data;
        },
        error: (err) => {
          console.error('There was an error!', err);
        }
      });
    }
  }

  formatData(data: any) {
    const dateTimeFormatter = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'short',
      timeStyle: 'short'
    });
    const formattedTime = dateTimeFormatter.format(new Date(data));
    return formattedTime;
  }

  protected readonly Array = Array;
}
