import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDrugsComponent } from './all-drugs/all-drugs.component';
import { SearchDrugComponent } from './search-drug/search-drug.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { RefillComponent } from './refill/refill.component';
import { RefillStatusComponent } from './refill-status/refill-status.component';
import { HomeComponent } from './home/home.component';

import { LoginModuleComponent } from './login-module/login-module.component';
import { RefillDueDateComponent } from './refill-due-date/refill-due-date.component';
import { AuthGuard } from './auth-guard';


const routes: Routes = [
  {path:'drugs',component:AllDrugsComponent,
                  canActivate:[AuthGuard]},
  {path:'search',component:SearchDrugComponent,
  canActivate:[AuthGuard]},
  {path:'subscriptions/:userid',component:SubscriptionsComponent,
  canActivate:[AuthGuard]},
  {path:'subscriptions',component:SubscriptionsComponent,
  canActivate:[AuthGuard]},
  {path:'subscribe',component:SubscribeComponent,
  canActivate:[AuthGuard]},
  {path:'refill',component:RefillComponent,
  canActivate:[AuthGuard]},
  {path:'refillStatus',component:RefillStatusComponent,
  canActivate:[AuthGuard]},
  {path:'home',component:HomeComponent,
  canActivate:[AuthGuard]},
  {path:'',redirectTo:'/loginModule',pathMatch:'full'},
  {path : 'loginModule',component:LoginModuleComponent},
  {path:'refillStatus',component:RefillStatusComponent,
  canActivate:[AuthGuard]},
  {path:'refilldue',component:RefillDueDateComponent,
  canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
