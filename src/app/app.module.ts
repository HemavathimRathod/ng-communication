import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CountryComponentComponent } from './components/country-component/country-component.component';
import { StateComponentComponent } from './components/state-component/state-component.component';

import { CommonService} from './services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponentComponent,
    StateComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
