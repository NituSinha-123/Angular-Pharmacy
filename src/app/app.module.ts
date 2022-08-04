import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllDrugsComponent } from './all-drugs/all-drugs.component';
import { SearchDrugComponent } from './search-drug/search-drug.component';
import { FormsModule } from '@angular/forms';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { RefillComponent } from './refill/refill.component';
import { RefillStatusComponent } from './refill-status/refill-status.component';
import { HomeComponent } from './home/home.component';
import { LoginModuleComponent } from './login-module/login-module.component';
import { RefillDueDateComponent } from './refill-due-date/refill-due-date.component';
import { AuthGuard } from './auth-guard';
import { AuthService } from './auth.service';
import { RefillStatusService } from './refill-status.service';
import { SubscribeService } from './subscribe.service';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    AllDrugsComponent,
    SearchDrugComponent,
    SubscribeComponent,
    SubscriptionsComponent,
    RefillComponent,
    RefillStatusComponent,
    HomeComponent,
    LoginModuleComponent,
    RefillDueDateComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthGuard,AuthService,RefillStatusService,SubscribeService,UserService,LoginModuleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
