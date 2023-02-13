import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../news';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  constructor(private api: NewsService) { }
  topHeadlinesData: News[] = [];
  ngOnInit(): void {
    this.api.topBusiness().subscribe((result: any) => {
      this.topHeadlinesData = result.articles;
      console.log(this.topHeadlinesData);
    })
  }
}
