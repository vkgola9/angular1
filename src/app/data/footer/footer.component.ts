import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare let tool: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private route: Router) { }
  reactiveForm = new FormGroup({
    subscribe: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('^[A-Za-z0-9_-]{1,20}[@]{1}[A-Za-z0-9]{2,8}[.]{1}[A-Za-z]{2,3}$')]),
  });
  router: any;
  get f() {
    return this.reactiveForm.controls;
  }
  reactSubmit() {
    this.reactiveForm.value;
    console.log(this.reactiveForm.value);
  };

}
