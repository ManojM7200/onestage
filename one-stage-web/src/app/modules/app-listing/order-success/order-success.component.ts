import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrl: './order-success.component.scss'
})
export class OrderSuccessComponent {

  
  constructor(private _route:Router){}
  
  public goto(page:string){
    this._route.navigate(["app-list/"+page]);
  }

}
