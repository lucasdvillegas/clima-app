import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '78b4589c1c7eecf5e37bf3b8417d1fae';
  URI: string = '';
  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`;
  }

  getWeather(nombreCiudad:string, codigoPais:string){
    return this.http.get(`${this.URI}${nombreCiudad}, ${codigoPais}`);
  }
}
