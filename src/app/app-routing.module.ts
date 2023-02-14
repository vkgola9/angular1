import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponent } from './custom/custom.component';
import { AboutComponent } from './data/about/about.component';
import { AppointmentComponent } from './data/appointment/appointment.component';
import { CheckoutComponent } from './data/checkout/checkout.component';
import { ContactComponent } from './data/contact/contact.component';
import { CoursesComponent } from './data/courses/courses.component';
import { FeaturesComponent } from './data/features/features.component';
import { HomeComponent } from './data/home/home.component';
import { SignupComponent } from './data/signup/signup.component';
import { TestimonialComponent } from './data/testimonial/testimonial.component';

const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: "full" },
  { path: 'crud', loadChildren: () => import('./post/post.module').then(m => m.PostModule) },
  { path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
  { path: "home", title: 'DRIVO', component: HomeComponent },
  { path: "contact", title: 'CONTACT', component: ContactComponent },
  { path: "about", title: 'ABOUT', component: AboutComponent },
  { path: "courses", title: 'COURSES', component: CoursesComponent },
  { path: "features", title: 'FEATURES', component: FeaturesComponent },
  { path: "testimonial", title: 'TESTIMONIAL', component: TestimonialComponent },
  { path: "appointment", title: 'APPOINTMENT', component: AppointmentComponent },
  { path: "signup", title: 'SIGNUP', component: SignupComponent },
  { path: "checkout", title: 'CHECKOUT', component: CheckoutComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
