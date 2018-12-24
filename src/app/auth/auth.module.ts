import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
