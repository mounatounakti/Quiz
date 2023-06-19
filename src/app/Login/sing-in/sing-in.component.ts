import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {
  reactiveForm: FormGroup;
  submitted: boolean = false;
  email: string = '';
  password: string = '';
  snackBar: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.reactiveForm = this.formBuilder.group({
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required]),
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

    const email = this.reactiveForm.get('Email')?.value;
    const password = this.reactiveForm.get('Password')?.value;

    this.authService.login(email, password)
      .subscribe(
        response => {
          console.log('Login successful');
          this.snackBar.open('Login successful', 'Close', {
            duration: 3000,
            panelClass: 'success-snackbar'
          });
          this.router.navigate(['/home']);
        },
        error => {
          console.log('Login error:', error);
          this.snackBar.open('Login failed. Please check your credentials.', 'Close', {
            duration: 3000,
            panelClass: 'error-snackbar'
          });
        }
      );
  }

  ngOnInit(): void { }
}
