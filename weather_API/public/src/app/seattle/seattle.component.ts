import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
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
