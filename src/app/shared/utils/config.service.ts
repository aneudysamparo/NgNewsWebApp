import { Injectable } from '@angular/core';
import { Endpoints } from './endpoints';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  _baseApiUri = 'https://newsapi.org';
  constructor(){}
  getBaseApiUri(){
    return this._baseApiUri;
  }
  getEndpoints(){
    return Endpoints;
  }
}
