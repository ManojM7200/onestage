import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-landingpage',
  templateUrl: './customer-landingpage.component.html',
  styleUrl: './customer-landingpage.component.scss'
})
export class CustomerLandingpageComponent {

  constructor(private _route:Router){}

  public goto(page:string){
    console.log(page)
    this._route.navigate(["app-list/"+page]);
  }
}
