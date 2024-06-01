import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CustomerLandingpageComponent } from './customer-landingpage/customer-landingpage.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  {path:"landing-page",component:LandingPageComponent},
  {path:"customer-page",component:CustomerLandingpageComponent},
  {path:"product-list",component:ProductListComponent},
  {path:"order-success",component:OrderSuccessComponent},
  {path:"profile",component:UserProfileComponent},
  {path:"",pathMatch:"full",redirectTo:"landing-page"}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AppListingRoutingModule { }
