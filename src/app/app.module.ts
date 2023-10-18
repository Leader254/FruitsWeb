import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { ServicesComponent } from './components/services/services.component';
import { PickUpComponent } from './components/pick-up/pick-up.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ShopUsComponent } from './components/shop-us/shop-us.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ServicesComponent,
    PickUpComponent,
    ProductsComponent,
    ContactUsComponent,
    ShopUsComponent,
    TestimonialsComponent,
    ProductDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
