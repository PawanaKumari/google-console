import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GoogleSigninService } from './google-signin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'consoleGoogle';
  user:gapi.auth2.GoogleUser 
  username:string
  constructor(private signInService:GoogleSigninService, private ref: ChangeDetectorRef){}
  ngOnInit():void {
  this.signInService.observable().subscribe((user)=>{
this.user=user
this.ref.detectChanges()
this.username=user.getBasicProfile().getName()
  })
  }
  signIn() {
    this.signInService.signIn()
  }
  signOut() {
    this.signInService.signOut()
  }
}
