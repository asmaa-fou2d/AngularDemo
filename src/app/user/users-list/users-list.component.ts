import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user.model';
import { UserListModel } from '../../shared/models/user-list.model';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: User[];

  ngOnInit(): void {
    this.userService.GetAllUsers().subscribe((result: User[]) => {
       this.users = result;
    });
  }
}
