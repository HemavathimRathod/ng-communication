import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Address } from './../app.vo';
import { Observable } from 'rxjs';

@Injectable()
export class CommonService {
    public addressSub: BehaviorSubject<Address> = new BehaviorSubject<Address>(null);

    public address: Observable<Address> = this.addressSub.asObservable();
    setAddress(countryData: string, stateData: string) {
        let addressData: Address = { country: countryData ,state: stateData };
        this.addressSub.next(addressData);
    }

   
}