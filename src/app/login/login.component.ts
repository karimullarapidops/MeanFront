import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UsersService) { }

  data = {
    email:'',
    password:''
  }

  login(){
    this.userService.login(this.data).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err)
    })
  }

  ngOnInit() {

  }

}
