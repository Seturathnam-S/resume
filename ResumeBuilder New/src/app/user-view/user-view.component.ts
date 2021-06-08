import { Component, OnInit ,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  constructor( public dialogRef?: MatDialogRef<UserViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: any) { }

  ngOnInit(): void {
  }
  onCancel(): void {
    this.dialogRef?.close();
  }

}
