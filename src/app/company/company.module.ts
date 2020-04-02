import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { SharedModule } from '../shared/shared.module';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CompaniesListComponent, CreateCompanyComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CompanyModule { }
