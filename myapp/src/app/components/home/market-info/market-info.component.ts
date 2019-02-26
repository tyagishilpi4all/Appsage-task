import { Component} from '@angular/core';
import {DemoService} from '../../../services/ClientService';

@Component({
  selector: 'app-market-info',
  templateUrl: './market-info.component.html',
  styleUrls: ['./market-info.component.css']
})
export class MarketInfoComponent {
   temp:any;
   image:string;
  constructor(private Data:DemoService) {
      this.image="../../../../assets/images/images (7).jpg";
   }

  ngOnInit() {
    this.Data.serverCall().subscribe(res=>{
       this.temp=res;
       console.log("temp is", this.temp);
    });
  }

}
