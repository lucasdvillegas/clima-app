import { Component, OnInit } from '@angular/core';

import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor( private weatherService: WeatherService){

  }

  ngOnInit() {
   
  }

  obtenerClima(nombreCiudad:string, codigoPais:string){
    this.weatherService.getWeather(nombreCiudad, codigoPais)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
  
  enviarUbicacion(nombreCiudad: HTMLInputElement, codigoPais: HTMLInputElement){
    this.obtenerClima(nombreCiudad.value, codigoPais.value);

    nombreCiudad.value = '';
    codigoPais.value = '';
    nombreCiudad.focus();
    return false;
  }
}
