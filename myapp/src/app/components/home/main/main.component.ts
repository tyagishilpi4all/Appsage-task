import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
   mainImg:string;
   mainUrl:string;
   img:string;
   pic:string;
   Rate:number;
   text:string;
  constructor() { 
    this.mainImg="../../../../assets/images/images.jpg";
    this.mainUrl="../../../../assets/images/images (4).jpg";
    this.img="../../../../assets/images/images (5).jpg";
    this.pic="../../../../assets/images/images (6).jpg";
    this.Rate=55;
    this.text="on your first order"
   }

  ngOnInit() {
  }

}
