import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../news';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  constructor(private api: NewsService) { }
  topHeadlinesData: News[] = [];
  newpost: any;
  ngOnInit(): void {
    this.api.topHeadlines().subscribe((result: any) => {
      this.topHeadlinesData = result.articles;
      console.log(this.page = result.articles);
    })
  }
  page: any;
  getGeneral() {
  }
  p: number = 1;
  total: number = 0;
  // getPosts() {
  //   this..getPosts(this.p).subscribe((res: any) => {
  //     this.newpost = res.data;
  //     this.total = res.total;
  //     console.log(this.newpost = res);
  //   })
  // }

  // pageChange(event: number) {
  //   this.p = event;
  //   this.getPosts();
  // }
}
