import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../news';
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  constructor(private api: NewsService) { }
  topHeadlinesData: News[] = [];
  ngOnInit(): void {
    this.api.topHealth().subscribe((result: any) => {
      this.topHeadlinesData = result.articles;
      console.log(this.topHeadlinesData);
    })
  }
}
