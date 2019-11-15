import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weather;
  temp;
  maxTemp;
  minTemp;
  humidity;
  wind;
  clouds;

  constructor(private _httpService: HttpService) {
  }

  ngOnInit() {
    this.weather = this._httpService.getWeather('4885983').then( weather => {
      console.log(weather)
      
    });
    
  }
}
