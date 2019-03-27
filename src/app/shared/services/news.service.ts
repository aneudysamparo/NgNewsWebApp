import { Article } from './../models/article';
import { ConfigService } from './../utils/config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends BaseService<Article> {

  constructor(httpclient: HttpClient, config: ConfigService) {
    super(httpclient, config, `${config.getEndpoints().Everithing}?q=bitcoin`);
   }
}
