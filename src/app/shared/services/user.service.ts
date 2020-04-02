import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserListModel } from '../models/user-list.model';
import { CreateUsertModel } from '../models/create-user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  // Base url
  baseurl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  GetAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseurl + 'users');
  }

  GetUser(Id: number): Observable<User> {
    return this.http.get<User>(this.baseurl + 'users/' + Id);
  }

  CreatUser(user: CreateUsertModel): Observable<any> {
    return this.http.post<User>(this.baseurl + 'users/', user);
  }

}
