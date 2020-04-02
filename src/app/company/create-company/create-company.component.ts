import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from '../../shared/services/company.service';
import { Router } from '@angular/router';
import { Company } from '../../shared/models/company.model';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  companyForm: FormGroup;

  constructor(private fb: FormBuilder, private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    this.companyForm = this.fb.group({
      companyName: ['', Validators.required],
      logo: ['', Validators.required]
    });
  }

  submit() {
    const company = <Company>this.companyForm.value;
    this.companyService.CreateCompany(company).subscribe(res => {
      if (res != null)
        this.router.navigateByUrl('companies/companies-list');
    });
  }

  isValid(controlName: string, errorType: string): boolean {
    return (
      this.companyForm.get(controlName).hasError(errorType) &&
      this.companyForm.get(controlName).touched
    );
  }

}
