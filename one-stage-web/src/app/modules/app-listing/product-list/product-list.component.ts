import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  constructor(private _route:Router){}
  
  public goto(page:string){
    this._route.navigate(["app-list/"+page]);
  }

  productCount:any ={};

  addProduct(name:string){
    if(!this.productCount[name]){
      this.productCount[name] = 0;
    }
    this.productCount[name]+=1;
  }

  removeProduct(name:string){
    if(this.productCount[name] > 1){
      this.productCount[name]-=1;
    }else{
      this.productCount[name] = undefined;
    }
  }

  
}
