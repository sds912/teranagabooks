import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import { BooksDetailsPageComponent } from './pages/books-details-page/books-details-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { SignupFormComponent } from './components/forms/signup-form/signup-form.component';
import { AddBookExchangeFormComponent } from './components/forms/add-book-exchange-form/add-book-exchange-form.component';
import { AddPackFormComponent } from './components/forms/add-pack-form/add-pack-form.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContactComponent } from './components/layout/contact/contact.component';
import { TestimonialsComponent } from './components/layout/testimonials/testimonials.component';
import { AboutUsComponent } from './components/layout/about-us/about-us.component';
import { TeamComponent } from './components/layout/team/team.component';
import { CategoriesComponent } from './components/layout/categories/categories.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    SearchPageComponent,
    BooksPageComponent,
    BooksDetailsPageComponent,
    AuthPageComponent,
    LoginFormComponent,
    SignupFormComponent,
    AddBookExchangeFormComponent,
    AddPackFormComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    ContactComponent,
    TestimonialsComponent,
    AboutUsComponent,
    TeamComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
