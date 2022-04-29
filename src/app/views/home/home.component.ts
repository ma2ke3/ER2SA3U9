import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
  userModel = new User();

onSubmit() {
  console.log(this.userModel)
  this.loginService.login(this.userModel).subscribe((response)=>{
    console.log(response)
  })
}
}
