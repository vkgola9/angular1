import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../news';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  constructor(private api: NewsService) { }
  topHeadlinesData: News[] = [];
  ngOnInit(): void {
    this.api.topSports().subscribe((result: any) => {
      this.topHeadlinesData = result.articles;
      console.log(this.topHeadlinesData);
    })
  }
}
