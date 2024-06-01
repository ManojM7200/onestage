import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  constructor(private _route:Router){

  }
  @Input('errorMsg') errorMsg: string | undefined ='';

  @Output() submitEM = new EventEmitter();
  
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  goTo(event:any,pagename:string){
    event.preventDefault();
    this._route.navigate(["user/"+pagename]);
  }

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      this._route.navigate(["app-list/customer-page"]);
      // this._route.navigate(["app-list/landing-page"]);
    }
  }
 
}
