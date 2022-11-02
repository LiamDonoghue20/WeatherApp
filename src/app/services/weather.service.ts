import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl + 'city/' + cityName, {
      headers: new HttpHeaders()
      .set(environment.xRapidAPIHostHeaderName, environment.xRapidApiHostHeaderValue)
      .set(environment.xRapidApiKeyHeaderName, environment.xRapidApiKeyHeaderValue),
    })
  }
}
