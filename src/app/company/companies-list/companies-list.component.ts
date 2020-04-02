import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../shared/services/company.service';
import { Company } from '../../shared/models/company.model';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {

  constructor(private companyService: CompanyService) { }

  companies: Company[];

  ngOnInit(): void {
    this.companyService.GetCompanies().subscribe((result: Company[]) => {
      this.companies = result;
    });

  }

}
