import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path : 'Register', component:RegisterComponent},
  {path : 'Login', component:LoginComponent},
  {path : 'Footer', component:FooterComponent},
  {path : 'Header', component:HeaderComponent},   
  {path : 'Home', component:HomeComponent},
  {path : 'Forgotpassword', component:ForgotpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
