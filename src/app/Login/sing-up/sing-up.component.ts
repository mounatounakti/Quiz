import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  reactiveForm: FormGroup;
  submitted: boolean = false;
  genders: string[] = ['Male', 'Female'];

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = this.formBuilder.group({
      Name: new FormControl('', [Validators.required]),
      FamilyName: new FormControl(''),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required, Validators.minLength(2)]),
      ConfirmPassword: new FormControl('', [Validators.required]),
      Gender: new FormControl(''),
      Role: new FormControl('')
    },
    {
      validators: this.mustMatch('Password', 'ConfirmPassword')
    });
  }

  get f() {
    return this.reactiveForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.reactiveForm.invalid) {
      return;
    }
    console.log(this.reactiveForm.value);
    if (this.reactiveForm.valid) {
      const selectedName = this.reactiveForm.get('Name')?.value;
      const selectedFamilyName = this.reactiveForm.get('FamilyName')?.value;
      const selectedEmail = this.reactiveForm.get('Email')?.value;
      const selectedPassword = this.reactiveForm.get('Password')?.value;
      const selectedRole = this.reactiveForm.get('Role')?.value;
      const selectedGender = this.reactiveForm.get('Gender')?.value;

      const data = {
        Name: selectedName,
        FamilyName: selectedFamilyName,
        Email: selectedEmail,
        Password: selectedPassword,
        Role: selectedRole,
        Gender: selectedGender
      };
    }
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  ngOnInit(): void {}


  // showAgeInput() {
  //   const roleSelect = document.getElementById("Role") as HTMLSelectElement;
  //   const divAge = document.getElementById("ageInput") as HTMLElement;

  //   roleSelect.addEventListener("change", () => {
  //     const selectedRole = roleSelect.value;
  //     if (selectedRole === "Player") {
  //       console.log("Player option selected");
  //       divAge.innerHTML =
  //         `<div class="form-group form-floating mb-3">
  //           <input type="number" class="form-control" id="Age" placeholder="Enter Your Age">
  //           <label for="Age">Enter Your Age</label>
  //         </div>`;
  //       divAge.style.display = "block";
  //     } else {
  //       console.log("Quiz Creator option selected");
  //       divAge.innerHTML = "";
  //       divAge.style.display = "none";
  //     }
  //   });
  // }

  }


