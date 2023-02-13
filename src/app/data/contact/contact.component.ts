import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private route: Router) { }
  reactiveForm = new FormGroup({
    floatingInput: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9]{4,}$')]),
    floatingPassword: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9]{4,}$')]),
    floatingPassword1: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9]{4,}$')]),
    floatingInput1: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9]{4,}$')]),
    floatingTextarea: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9]{4,}$')]),
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
