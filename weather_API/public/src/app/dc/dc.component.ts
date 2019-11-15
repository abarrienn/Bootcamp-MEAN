import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DCComponent implements OnInit {
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
