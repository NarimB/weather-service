import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './weather.html',
  styleUrls: ['./weather.scss'],
})
export class WeatherComponent {
  city = '';
  cities: string[] = [];
  weatherData: Record<string, any> = {};

  constructor(private weatherService: WeatherService) {}

  addCity() {
    const input = this.city.trim();
    if (!input) return;

    // Сначала проверяем город через API
    this.weatherService.getWeather(input).subscribe({
      next: (data) => {
        const officialName = data.name;
        if (!this.cities.includes(officialName)) {
          this.cities.push(officialName);
          this.weatherData[officialName] = data;
        }
        this.city = '';
      },
      error: () => {
        alert('Город не найден');
        this.city = '';
      },
    });
  }

  removeCity(name: string) {
    this.cities = this.cities.filter((c) => c !== name);
    delete this.weatherData[name];
  }
}
