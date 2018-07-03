import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from './../../services/common.service';

@Component({
  selector: 'app-country-component',
  templateUrl: './country-component.component.html',
  styleUrls: ['./country-component.component.css']
})
export class CountryComponentComponent implements OnInit, OnDestroy {

  public country = ["India", "US"];
  public selectedCountry: string = '';

  constructor(public commonService: CommonService) {}

  ngOnInit() {}

  //on country dropdown change
  updateSelectedValue(): void {
      console.log(this.selectedCountry)
      this.commonService.setAddress(this.selectedCountry, '');
  }

  ngOnDestroy() {
    this.selectedCountry = '';
    this.country = [];
  }
}