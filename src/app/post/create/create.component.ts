import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form!: FormGroup;
  constructor(public postService: PostService, private router: Router) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]{4,}$')]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]{4,}$')]),
      email: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[A-Za-z0-9_-]{1,20}[@]{1}[A-Za-z0-9]{2,8}[.]{1}[A-Za-z]{2,3}$')]),
      contactNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]{4,13}$')]),
      age: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern('^[0-9]{1,3}$')]),
      address: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[ a-zA-Z0-9]{4,}$')]),
    })
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    this.postService.create(this.form.value).subscribe((res: any) => {
      this.router.navigateByUrl('post/index');
    })
  }

}
