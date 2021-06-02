import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from "@angular/router";
import {FormBuilder } from '@angular/forms';

import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  Form = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['']
  
  });
  hide = true;
  constructor(private fb: FormBuilder,private userService: UserService,private router : Router) { }
  submitted = false;
  serverErrorMessages?: string;
  ngOnInit() {
    if(this.userService.isLoggedIn())
    this.router.navigateByUrl('/user');
  }
  
  get f() { return this.Form.controls; }
  onSubmit(){
    this.submitted = true;
    console.log(this.Form.value)
    this.userService.login(this.Form.value).subscribe(
      (res : any) => {
        this.userService.setToken(res['token']);
        console.log(res);
        this.router.navigateByUrl('/user');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}
