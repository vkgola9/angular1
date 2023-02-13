import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../news';
@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  constructor(private api: NewsService) { }
  topHeadlinesData: News[] = [];
  ngOnInit(): void {
    this.api.topTechnology().subscribe((result: any) => {
      this.topHeadlinesData = result.articles;
      console.log(this.topHeadlinesData);
    })
  }
}
