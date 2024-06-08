import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../../../shared/services/providers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {

  constructor(private providerService:ProvidersService,private _route:Router){
  }
  

  favorites:any[]=[];
  ngOnInit(){
    this.favorites = this.providerService.favorites;
  }

  public goto(page:string){
    this._route.navigate([page]);
  }
}
