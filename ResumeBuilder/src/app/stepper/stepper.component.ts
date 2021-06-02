import { Component, OnInit ,Output,  EventEmitter,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormArray, FormControl} from '@angular/forms';
import { ResumeService } from '../resume.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {


  isLinear = true;
  personalFormGroup!: FormGroup;
  educationFormGroup!: FormGroup;
  exFormGroup!:FormGroup;
  emailvalue?: string;

  constructor(private _formBuilder: FormBuilder,private resumeService?: ResumeService,

    public dialogRef?: MatDialogRef<StepperComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: any) { }

  ngOnInit(): void {
    this.personalFormGroup = this._formBuilder.group({
      _id:[''],
      firstname: [''],
      lastname: [''],
      email: [''],
      mobile: [''],
      gender:['']
    });
    this.educationFormGroup = this._formBuilder.group({
      sslcname: [''],
      sslcyear: [''],
      sslcper: [''],
      hscname: [''],
      hscyear: [''],
      hscper: [''],
      colname: [''],
      coldeg: [''],
      colyear: [''],
      colper: ['']

    });
    this.exFormGroup = this._formBuilder.group({
      company: [''],
      start: [''],
      end: [''],
      desc: ['']

    });

  }

  save(){


    const data = {
      firstname: this.personalFormGroup.controls['firstname'].value,
      lastname: this.personalFormGroup.controls['lastname'].value,
      email: this.personalFormGroup.controls['email'].value,
      mobile: this.personalFormGroup.controls['mobile'].value,
      gender: this.personalFormGroup.controls['gender'].value,
      sslcname: this.educationFormGroup.controls['sslcname'].value,
      sslcyear: this.educationFormGroup.controls['sslcyear'].value,
      sslcper: this.educationFormGroup.controls['sslcper'].value,
      hscname: this.educationFormGroup.controls['hscname'].value,
      hscyear: this.educationFormGroup.controls['hscyear'].value,
      hscper: this.educationFormGroup.controls['hscper'].value,
      colname: this.educationFormGroup.controls['colname'].value,
      coldeg: this.educationFormGroup.controls['coldeg'].value,
      colyear: this.educationFormGroup.controls['colyear'].value,
      colper: this.educationFormGroup.controls['colper'].value,
      company: this.exFormGroup.controls['company'].value,
      start: this.exFormGroup.controls['start'].value,
      end: this.exFormGroup.controls['end'].value,
      desc: this.exFormGroup.controls['desc'].value,
      

    };
    
    // this.resumeService?.setEmail(this.personalFormGroup.controls['email'].value);
    this.resumeService?.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.resumeService?.setEmail(response)
          this.reloadPage();
        },
        error => {
          console.log(error);
        });
       alert('success');
  }
  reloadPage() {
    window.location.reload();
  }
  onCancel(): void {
    this.dialogRef?.close();
  }


  }



