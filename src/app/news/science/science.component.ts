import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../news';
@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  constructor(private api: NewsService) { }
  topHeadlinesData: News[] = [];
  ngOnInit(): void {
    this.api.topScience().subscribe((result: any) => {
      this.topHeadlinesData = result.articles;
      console.log(this.topHeadlinesData);
    })
  }
}
