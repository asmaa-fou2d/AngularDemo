import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  // Base url
  baseurl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  GetCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.baseurl + 'companies');
  }

  CreateCompany(company: Company): Observable<any> {
    return this.http.post<Company>(this.baseurl + 'companies/', company);
  }

}
