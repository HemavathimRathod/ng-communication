import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from './../../services/common.service';

@Component({
  selector: 'app-state-component',
  templateUrl: './state-component.component.html',
  styleUrls: ['./state-component.component.css']
})
export class StateComponentComponent implements OnInit, OnDestroy {

  public addressSubscription = null;
  public indiaState = ['Andaman and Nicobar Islands',
      'Andhra Pradesh', 'Arunachal Pradesh', 'Assam',
      'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa',
      'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
      'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Pondicherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
      'Uttaranchal', 'Uttar Pradesh', 'West Bengal'
  ]

  public USStates = ["AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY"]
  public state = [];
  public selectedState: string = '';
  public selectedCountry: string = '';
  constructor(public commonService: CommonService) {}

  ngOnInit() {
      this.selectedCountry = '';
      this.selectedState = '';
      this.updateAdress();
  }

  //on state dropdown change
  updateSelectedValue(): void {
      this.commonService.setAddress(this.selectedCountry, this.selectedState);
  }

  updateAdress() {
      this.addressSubscription = this.commonService.addressSub.subscribe(
          address => {
              if (address) {
                  this.selectedCountry = address.country
                  this.state = address.country == "India" ? this.indiaState : this.USStates;
                  console.log(address);
              }
          }
      )
  }

  ngOnDestroy() {
    this.addressSubscription.unsubscribe();
    this.selectedCountry = '';
    this.selectedState = '';
    this.state = [];
  }
}