import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CollectingDataService {

  constructor(private http: HttpClient) { }


  getForecastAndCurrentBerlin( ) {
    return this.http.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m');
  }
  getForecastAndCurrentZemun( ) {
    return this.http.get('https://api.open-meteo.com/v1/forecast?latitude=44.8531&longitude=20.3687&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m');
  }

}
