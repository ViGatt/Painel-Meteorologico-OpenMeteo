import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TempoService {
  private geoApiUrl = 'https://geocoding-api.open-meteo.com/v1/search';
  private weatherApiUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) {}

  getForecast(lat: number, lon: number): Observable<any> {
    const url = `${this.weatherApiUrl}?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,rain_sum,wind_speed_10m_max&hourly=temperature_2m,rain,wind_speed_10m&timezone=America/Sao_Paulo`;
    return this.http.get(url);
  }

  getCoordinates(city: string): Observable<any> {
    const url = `${this.geoApiUrl}?name=${city}&count=1&language=pt&format=json`;
    return this.http.get(url);
  }
}
