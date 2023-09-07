import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private selectedCitySubject = new BehaviorSubject<string>('Zemun');
  selectedCity$ = this.selectedCitySubject.asObservable();

  changeCity(city: string) {
    this.selectedCitySubject.next(city);
  }
}
