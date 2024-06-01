import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {path:"user",loadChildren:() => import('./modules/user/user.module').then(m => m.UserModule)},
 {path:"app-list",loadChildren:() => import('./modules/app-listing/app-listing.module').then(m => m.AppListingModule)},
 {path:"",redirectTo:"user",pathMatch:"full"}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
