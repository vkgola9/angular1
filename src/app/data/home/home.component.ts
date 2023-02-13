import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  // let navi = document.querySelector('nav');
  // let top = document.getElementsByClassName('.top');
  // onMouseMove(event: MouseEvent) {

  //     if (window.pageYOffset >= 110) {
  //       // navi.classList.add('sticky');
  //       $("top").addClass('stick');
  //     } else {
  //       // navi.classList.remove('sticky');
  //       $("top").removeClass('stick');
  //     }

  //   };

}
// horizontal scrolling // horizontal scrolling // horizontal scrolling // horizontal scrolling // horizontal scrolling // horizontal scrolling // horizontal scrolling 