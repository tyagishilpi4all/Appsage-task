import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './components/home/main/main.component'
import { CategoryComponent } from './components/home/category/category.component';
import { BidComponent } from './components/home/bid/bid.component';
import { OffersComponent } from './components/home/offers/offers.component';
import { SupermarketComponent } from './components/home/supermarket/supermarket.component';
import { LoginComponent } from './components/home/login/login.component';
import { RegistrationComponent } from './components/home/registration/registration.component';
import { MarketInfoComponent } from './components/home/market-info/market-info.component';
import { MiniComponent } from './components/home/mini/mini.component';
import { HypermarketComponent } from './components/home/hypermarket/hypermarket.component';
const routes: Routes = [
  {
    path:' ',
    component:MainComponent
  },
  {
    path:'category',
    component:CategoryComponent
  },
  {
    path:'bid',
    component:BidComponent
  },
  {
    path:'offers',
    component:OffersComponent
  },
  {
    path:'supermarket',
    component:SupermarketComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'marketInfo',
    component:MarketInfoComponent
  },
  {
    path:'hypermarket',
    component:HypermarketComponent
  },
  {
    path:'mini',
    component:MiniComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
