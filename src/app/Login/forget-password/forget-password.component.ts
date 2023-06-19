import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})

export class ForgetPasswordComponent {
  reactiveForm:FormGroup;
  submitted:boolean = false;

  constructor(private formBuilder:FormBuilder){
    this.reactiveForm = this.formBuilder.group({
      Email: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      ConfirmPassword: new FormControl('', [Validators.required])
    },
    {
      validators: this.MustMatch('Password','ConfirmPassword')
    })
  }

  get f (){
    return this.reactiveForm.controls
  }

onSubmit() {
  this.submitted = true;
  if (this.reactiveForm.invalid) {
    return;
  }
}

MustMatch(controlName:string, matchingControlName: string){
  return(formGroup:FormGroup)=>{
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if(matchingControl.errors && !matchingControl.errors['MustMatch']){
      return;
    }
    if(control.value !== matchingControl.value) {
      matchingControl.setErrors({MustMatch:true})
    }
    else{
      matchingControl.setErrors(null)
    }
  }
}

  ngOnInit():void {}

}
