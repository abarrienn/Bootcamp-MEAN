import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
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
