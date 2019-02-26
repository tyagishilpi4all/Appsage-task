import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  bannerUrl:string;
  bannerTitle:string;
  bannerText:string;
  constructor() {
    this.bannerUrl="../../../../assets/images/timthumb-3-1024x392.jpeg";
    this.bannerTitle="Select Your Location";
     this.bannerText="Online Grocery Delivery From The Top Supermarket In Saudi Arabia"
   }

  ngOnInit() {
  }

}
