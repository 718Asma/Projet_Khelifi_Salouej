import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService
{
  private apiKey = 'c36d0a4e50fbba89fd11d7798d1ceb77';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any>
  {
    let params = {
      q: city,
      appid: this.apiKey,
    };

    return this.http.get(this.apiUrl, { params });
  }
}
