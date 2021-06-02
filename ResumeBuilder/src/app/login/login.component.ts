import { Component, OnInit ,Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { TaskService } from '../task.service';
import {MatDialog, MatDialogRef}  from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  
  constructor(public dialog: MatDialog,private router: Router) {}
  openDialog(): void {
   
    let dialogref = this.dialog.open(RegisterComponent, {
      width: '700px',
      height:'600px',
    });

    dialogref.afterClosed().subscribe(result => {
      console.log(result);
      });
  
  }

  onLogin(){
    this.router.navigate(['/login']);
  }
  
}