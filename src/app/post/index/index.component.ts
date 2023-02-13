import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  Posts: Post[] = [];
  newpost: any;
  constructor(public postService: PostService) { }
  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Post[]) => {
      this.Posts = data;
      console.log(this.Posts);
    })
    this.getPosts();
  };

  deleteData(id: number) {
    this.postService.delete(id).subscribe(res => {
      this.Posts = this.Posts.filter(item => item.id !== id)
    })
  }
  // pagination start

  p: number = 1;
  total: number = 0;
  getPosts() {
    this.postService.getPosts(this.p).subscribe((res: any) => {
      this.newpost = res.data;
      this.total = res.total;
      console.log(this.newpost = res);
    })
  }

  pageChange(event: number) {
    this.p = event;
    this.getPosts();
  }
  // pagination end
}
