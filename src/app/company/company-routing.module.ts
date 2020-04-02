import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CreateCompanyComponent } from './create-company/create-company.component';


const routes: Routes = [
  { path: 'companies-list', component: CompaniesListComponent },
  { path: 'create-company', component: CreateCompanyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CompanyRoutingModule { }
