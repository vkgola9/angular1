import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id!: number;
  post!: Post;
  constructor(public postService: PostService,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postID'];
    this.postService.find(this.id).subscribe((data: Post) => {
      this.post = data;
    })
  }
}
