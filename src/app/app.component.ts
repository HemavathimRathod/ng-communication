import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from './../app/services/common.service';
import { Address} from './../app/app.vo'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  public addressSubscription = null;
  public addressDetails = new Address;
  constructor(public commonservice:CommonService) { }

  ngOnInit() {
    this.updateAdress();
  }

  updateAdress(){
    this.addressSubscription = this.commonservice.addressSub.subscribe(
      address => {
        if(address){
           this.addressDetails.country = address.country;
          this.addressDetails.state = address.state;
        }
      }
    )
  }

  ngOnDestroy() {
    this.addressSubscription.unsubscribe();
  }
}
