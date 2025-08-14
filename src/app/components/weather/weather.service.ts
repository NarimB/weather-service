import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly apiKey = '2bb42c1699c7ce31cce4af0089ce4fa5';
  private readonly apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${encodeURIComponent(city)}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}
