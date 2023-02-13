import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  display = false;
  toggle() {
    this.display = !this.display
  }
  constructor(private route: Router) { }
  reactiveForm = new FormGroup({
    floatingInput: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9]{4,}$')]),
    floatingInput1: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9]{4,}$')]),
    floatingPassword: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9]{4,}$')]),
    floatingPassword1: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9]{4,}$')]),
    floatingTextarea: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9]{4,}$')]),
    contact: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
  });
  router: any;
  get f() {
    return this.reactiveForm.controls;
  }
  reactSubmit() {
    this.reactiveForm.value;
    console.log(this.reactiveForm.value);
    this.router.navigateByUrl('response');

  };

}
