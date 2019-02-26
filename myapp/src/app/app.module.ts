import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/home/header/header.component';
import { NavComponent } from './components/home/header/nav/nav.component';
import { RightNavComponent } from './components/home/header/right-nav/right-nav.component';
import { LogoComponent } from './components/home/header/nav/logo/logo.component';
import { NacLinkComponent } from './components/home/header/nav/nac-link/nac-link.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { MainComponent } from './components/home/main/main.component';
import { MarketInfoComponent } from './components/home/market-info/market-info.component';
import { HttpClientModule } from '@angular/common/http';
import { MarketLinkComponent } from './components/home/market-link/market-link.component';
import { CategoryComponent } from './components/home/category/category.component';
import { BidComponent } from './components/home/bid/bid.component';
import { OffersComponent } from './components/home/offers/offers.component';
import { SupermarketComponent } from './components/home/supermarket/supermarket.component';
import { LoginComponent } from './components/home/login/login.component';
import { RegistrationComponent } from './components/home/registration/registration.component';
import { HypermarketComponent } from './components/home/hypermarket/hypermarket.component';
import { MiniComponent } from './components/home/mini/mini.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    RightNavComponent,
    LogoComponent,
    NacLinkComponent,
    BannerComponent,
    MainComponent,
    MarketInfoComponent,
    MarketLinkComponent,
    CategoryComponent,
    BidComponent,
    OffersComponent,
    SupermarketComponent,
    LoginComponent,
    RegistrationComponent,
    HypermarketComponent,
    MiniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
