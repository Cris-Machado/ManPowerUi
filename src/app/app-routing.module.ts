import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth.guard';
import { createComponent } from '@angular/compiler/src/core';
import { CreatePointComponent } from './pages/create-point/create-point.component';


export const routes: Routes = [
  {
      path: "login",
      component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard] 
 },
  {
    path: "create",
    component: CreatePointComponent,
    canActivate: [AuthGuard] 
 },
 { path: '', redirectTo: '/login', pathMatch: 'full' },
 { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
