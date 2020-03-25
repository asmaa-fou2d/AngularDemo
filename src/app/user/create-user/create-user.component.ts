import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { combineAll } from 'rxjs/operators';
import { CreateUsertModel } from '../../shared/models/create-user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      userJob: ['', Validators.required]
    });
  }

  submit() {
    const user = <CreateUsertModel>this.userForm.value;
    this.userService.CreatUser(user).subscribe(res => {
      if (res != null)
        this.router.navigateByUrl('users/users-list');
    });
  }

  isValid(controlName: string, errorType: string): boolean {
    return (
      this.userForm.get(controlName).hasError(errorType) &&
      this.userForm.get(controlName).touched
    );
  }
}
