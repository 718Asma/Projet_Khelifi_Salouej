import { Component } from '@angular/core';
import { WeatherService } from 'src/app/Services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit()
  {
    this.weatherService.getWeather('Tunis').subscribe(
      (data) => {
        console.log(data);
        this.weatherData = data;
    });
  }
  convertToCelsius(kelvin: number): number
  {
    return kelvin - 273.15;
  }
}
