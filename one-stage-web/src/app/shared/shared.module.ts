import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BottomBarComponent } from './component/bottom-bar/bottom-bar.component';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { LogoComponent } from './component/logo/logo.component';
import { WaterBasedHeaderComponent } from './component/water-based-header/water-based-header.component';



@NgModule({
  declarations: [
    BottomBarComponent,
    TopBarComponent,
    LogoComponent,
    WaterBasedHeaderComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule
  ],
  exports:[
    BottomBarComponent,
    TopBarComponent,
    WaterBasedHeaderComponent
  ]
})
export class SharedModule { }
