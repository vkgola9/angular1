import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  form!: FormGroup;
  id!: number;
  post!: Post;

  constructor(public postService: PostService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postID'];
    this.postService.find(this.id).subscribe((res: any) => {
      this.post = res;
    });
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]{4,}$')]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]{4,}$')]),
      email: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[A-Za-z0-9_-]{1,20}[@]{1}[A-Za-z0-9]{2,8}[.]{1}[A-Za-z]{2,3}$')]),
      contactNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]{4,13}$')]),
      age: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern('^[0-9]{1,3}$')]),
      address: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern('^[ a-zA-Z0-9]{4,}$')]),
    })
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    this.postService.update(this.id, this.form.value).subscribe((res: any) => {
      this.router.navigateByUrl('post/index');
    })
  }
}
