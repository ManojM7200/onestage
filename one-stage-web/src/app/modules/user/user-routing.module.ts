import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {path:"forgot-password",component:ForgotPasswordComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginFormComponent},
  {path:"",pathMatch:"full",redirectTo:"login"}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
