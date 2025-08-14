import { Component } from '@angular/core';
import { WeatherComponent } from './components/weather/weather';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherComponent, FormsModule, HttpClientModule, HeaderComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {}
