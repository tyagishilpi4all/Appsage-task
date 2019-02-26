import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  url:string;
  constructor() { 
    this.url="../../../../../../assets/images/download.png"
  }

  ngOnInit() {
  }

}
