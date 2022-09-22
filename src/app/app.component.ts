import { Component, OnInit } from '@angular/core';

import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  clima:any;

  ciudad:string = '';

  constructor( private weatherService: WeatherService){

  }

  ngOnInit() {
   
  }

  obtenerClima(nombreCiudad:string, codigoPais:string){
    this.weatherService.getWeather(nombreCiudad, codigoPais)
    .subscribe(
      res => {
        console.log(res);
        this.clima = res
      },
      err => console.log(err)
    )
  }
  
  enviarUbicacion(nombreCiudad: HTMLInputElement, codigoPais: HTMLInputElement){
    if(nombreCiudad.value && codigoPais.value){
      this.obtenerClima(nombreCiudad.value, codigoPais.value);
      this.obtenerUbicacion(nombreCiudad);
      nombreCiudad.value = '';
      codigoPais.value = '';
    }else{
      alert('Por favor, ingresar algunos valores');
    }
    nombreCiudad.focus();
    return false;
  }

  obtenerUbicacion(nombreCiudad: HTMLInputElement){
    return this.ciudad = nombreCiudad.value;
  }

}
