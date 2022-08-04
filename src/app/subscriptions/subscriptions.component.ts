import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscribeService } from '../subscribe.service';
import { SubscriptionDetails } from '../subscription-details';
import { AuthService } from '../auth.service';
import{LoginModuleComponent} from '../login-module/login-module.component';
@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {
  

  constructor(private eservice: SubscribeService, private route: Router, private authService: AuthService,private login:LoginModuleComponent,private route1:ActivatedRoute) {

    if(!this.authService.isLoggedIn()){
      this.route.navigate([""]);
    }  
  }

  subscribed: boolean = false
  //public mId:string="";
  date!: Date
  subscriptions: SubscriptionDetails[] = []

  ngOnInit(): void {
    this.subscribed = false
   //this.mId=this.route1.snapshot.params.userid
   //this.mId=history.state;
    //console.log(this.mId)
    this.getAllSubscriptions();
    
  }

  refill(sid: string) {
    console.log(sid + '******')
    localStorage.setItem('subID', sid);
    this.route.navigate(['/refill']);

  }

   //mId=localStorage.getItem("userId")
   mId = "admin"
  


  getAllSubscriptions(): void {
    console.log(this.mId);
    this.subscriptions = []
    this.eservice.getAllSubscriptions(this.mId).subscribe(data => {
      this.subscribed = true
      this.subscriptions = data as SubscriptionDetails[];
      console.log(data)

    })
  }
  msg: string = ''
  unsubed: boolean = false
  unsubscribe(sId: string) {
    this.eservice.unsubscribe(this.mId, sId as unknown as number).subscribe(data => {
      this.subscribed = false
      this.unsubed = true
      this.getAllSubscriptions()
      this.route.navigate(['home'])
      console.log(sId)
    }, error => {
      this.subscribed = false
      this.unsubed = true
      // window.location.reload()
    })
  }

  showsubscriptions() {
    this.subscribed = false
    this.unsubed = false
    
    this.getAllSubscriptions()
  }

}
