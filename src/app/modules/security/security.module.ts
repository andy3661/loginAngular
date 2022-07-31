import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LogoutComponent } from './logout/logout/logout.component';
import { PasswordResetComponent } from './password-reset/password-reset/password-reset.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    LogoutComponent,
    PasswordResetComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }
