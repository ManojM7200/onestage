import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../../services/providers.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent implements OnInit{

  constructor(private providerservice:ProvidersService){

  }

 
  providers:any[]=[];

  ngOnInit(): void {
    this.providerservice.getProviders().subscribe((result:any)=>{
      this.providers = result.data;
      console.log(result)
    }) 
  }

  addToFav(itemToBeAdded:any):void{
    // this.providerservice.addToFav(itemToBeAdded);
    this.providerservice.favorites.push(itemToBeAdded);
  }
}
