import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'companies', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
