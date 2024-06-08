import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(private http:HttpClient) { }

  public favorites:any[]=[];

  public getProviders(){
    return this.http.get("assets/json/searchResult.json")
  }


  addToFav(itemToBeAdded:any){
    let favoritesJSON:any = this.getFav();
    favoritesJSON.push(itemToBeAdded);
    this.setFav(favoritesJSON);
  }

  getFav(){
    let favorites = localStorage.getItem("favorites");
    if(favorites){
      return JSON.parse(favorites);
    }
    return [];
  }

  setFav(favoritesArr:any[]):void{
    localStorage.setItem("favorites",JSON.stringify(favoritesArr))
  }
}
