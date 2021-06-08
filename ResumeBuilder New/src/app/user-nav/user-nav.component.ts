import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef}  from '@angular/material/dialog';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { UserViewComponent } from '../user-view/user-view.component';

import { StepperComponent } from '../stepper/stepper.component';
import { UserService } from '../user.service';
import { Router } from "@angular/router";
import { ResumeService } from '../resume.service';



@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {

  userDetails : any;
  email?: string;

  rolevalue?:boolean;
  role1?:string;
  role2?:string;

  value: any;
  firstname?:string;
  lastname='';
  
  constructor(public dialog: MatDialog,private userService: UserService, private router: Router,private resumeService?: ResumeService,) {}

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      (res : any) => {
        this.userDetails = res['user'];
        if(this.userDetails.role == "User")
        { 
          this.role1= "user";
        this.resumeService?.getemail(this.userDetails.email)
        .subscribe(
         data => {
        this.value = data;
        console.log(this.value.firstname);
      },
      error => {
        console.log(error);
      });}

      if(this.userDetails.role == "admin" || this.userDetails.role == "manager")
        { 
          this.rolevalue= true;
          if(this.userDetails.role == "admin"){  this.role2= "admin";}
          this.resumeService?.getAll()
        .subscribe(
         data => {
        this.value = data;
        console.log(this.value.firstname);
      },
      error => {
        console.log(error);
      });}
        console.log(res);
      },
      
      err => { 
        console.log(err);
        
      }
    );

    

    
  }

  openDialog(user : any): void {
    //alert("Hi")
    
    let dialogRef = this.dialog.open(StepperComponent, {
      width: '700px',
      height:'600px',
      data: user
  
    });
    dialogRef.afterClosed().subscribe(result => {
      this.email = result;
    });
  
  }

  openDialogedit(user : any): void {
   
    let dialogref = this.dialog?.open(UserDialogComponent, {
      width: '700px',
      height:'600px',
      data: user
    });

    dialogref?.afterClosed().subscribe(result => {
      console.log(result);
      });
  } 
   
  openDialogview(user : any): void {
   
    let dialogref = this.dialog?.open(UserViewComponent, {
      width: '800px',
      height:'500px',
      data: user
    });

    dialogref?.afterClosed().subscribe(result => {
      console.log(result);
      });
  } 
   

  onLogout(){
    this.rolevalue=false
    this.userService.deleteToken();
    this.router.navigate(['/']);
    console.log(this.userDetails);
  }

  deleteTutorial(_id: any) {
    if (confirm('Are you sure to delete this record ?') == true){
    console.log(_id)
    this.resumeService?.delete(_id)
      .subscribe(
        response => {
          console.log(response);
          this.reloadPage();
        },
        error => {
          console.log(error);
        });
        
  }
  }
  reloadPage() {
    window.location.reload();
  }

}
