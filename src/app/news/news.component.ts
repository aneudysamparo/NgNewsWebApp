import { Component, OnInit } from '@angular/core';

import { NewsService } from '../shared/services/news.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public articles = [];

  constructor(private service: NewsService) {}
  private title = 'News';

  ngOnInit() {
    this.loadNew().subscribe(data  => {
      this.articles = data.articles;
      console.log(this.articles)
    });
  }

  loadNew(): Observable<any[]> {
    return this.service.GetAll();
  }

}
