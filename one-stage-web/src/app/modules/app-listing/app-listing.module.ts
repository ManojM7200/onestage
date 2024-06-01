import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppListingRoutingModule } from './app-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { CustomerLandingpageComponent } from './customer-landingpage/customer-landingpage.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    CustomerLandingpageComponent,
    ProductListComponent,
    OrderSuccessComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    AppListingRoutingModule,
  ]
})
export class AppListingModule { }
