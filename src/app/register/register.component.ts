import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UsersService) { }

  data = {
    "firstName": '',
    "lastName": '',
    "phoneNumber": '',
    "email": '',
    "password": ''
  }

  register() {
    this.userService.register(this.data).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err)
    })
  }

  ngOnInit() {
  }

}
