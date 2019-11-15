import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { }

  getWeather(city: string){
    return this._http.get(`http://api.openweathermap.org/data/2.5/forecast?id=${city}&APPID=caeb9471e9ea74bb3c9dc52990e38764`).pipe
    (map(data => data.json()))
    .toPromise().then();
  }

}

