import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PrescriptionDetails } from '../prescription-details';
import { SubscribeService } from '../subscribe.service';
import { AuthService } from '../auth.service';
import{LoginModuleComponent} from '../login-module/login-module.component';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  date: string | undefined;
  msg !: string;
  msg1 !: string;
  
  todayDate: Date=new Date();
  prescriptionDetails : PrescriptionDetails={ 'prescriptionId' : 1,
    'memberId' : 'admin',
  'memberLocation' : '',
  'policyNumber' : '',
  'insuranceProvider' : '',
  'prescriptionDate' : this.todayDate,
  'drugName' : '',
  'dosageDefinition' : 'morning',
  'quantity' : 0,
  'courseDuration' : 0,
  'doctorName' : '',
};
  constructor(private route: ActivatedRoute, private service: SubscribeService, private router:Router,private authService:AuthService,private login:LoginModuleComponent) { 
   
    if(!this.authService.isLoggedIn()){
      this.router.navigate([""]);
    } 
   }

  ngOnInit(): void {
    this.date = new Date().toISOString().slice(0, 10);
  }
  public cities:string[]=['Bangalore','Chennai','Hyderabad','Pune']
  public meds:string[]=['Paracetmol','Citrazine','Aspirin']
  public insurances:string[]=['Aditya Birla','Bajaj Allianz','Bharti AXA','IFFCO Tokio']
handleSubmit()
{
  console.log(this.prescriptionDetails);
  this.service.savePrescription(this.prescriptionDetails).subscribe((data:any)=>
    {
      
    },(HttpErrorResponse:any) => {
     console.log(HttpErrorResponse)
     if(HttpErrorResponse.status==507)
     {
      alert("Stock unavaliable ")
     }
      if(HttpErrorResponse.status==200)
      {
     alert("You have successfully subscribed to " + this.prescriptionDetails.drugName);
      this.router.navigate(['subscriptions'])
      }
    },()=>{})
}


}