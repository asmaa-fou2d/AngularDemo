import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { CompanyService } from './services/company.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
  ],
  providers: [UserService, CompanyService],
})
export class SharedModule { }
