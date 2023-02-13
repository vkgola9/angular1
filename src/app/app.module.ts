import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './data/header/header.component';
import { FooterComponent } from './data/footer/footer.component';
import { HomeComponent } from './data/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';
import { ResponseComponent } from './data/response/response.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AboutComponent } from './data/about/about.component';
import { CoursesComponent } from './data/courses/courses.component';
import { FeaturesComponent } from './data/features/features.component';
import { AppointmentComponent } from './data/appointment/appointment.component';
import { TestimonialComponent } from './data/testimonial/testimonial.component';
import { ContactComponent } from './data/contact/contact.component';
import { SignupComponent } from './data/signup/signup.component';
import { PostModule } from './post/post.module';
import { NewsModule } from './news/news.module';
import { ShortPipe } from './short.pipe';
import { CheckoutComponent } from './data/checkout/checkout.component';
import { CustomComponent } from './custom/custom.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResponseComponent,
    AboutComponent,
    CoursesComponent,
    FeaturesComponent,
    AppointmentComponent,
    TestimonialComponent,
    ContactComponent,
    SignupComponent,
    ShortPipe,
    CheckoutComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ReactiveFormsModule,
    PostModule,
    NgxPaginationModule, NewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
