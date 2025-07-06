import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

// Custom password match validator
export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.parent?.get('password')?.value;
    const confirmPassword = control.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  };
}

@Component({
  selector: 'app-registration',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './registration.html',
  styleUrls: ['./registration.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10,15}')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      medicalConditions: [''],
      password: ['', [Validators.required]], // Password length validation
      confirmPassword: ['', [Validators.required, passwordMatchValidator()]],
      emergencyContactName: ['', Validators.required],
      emergencyContactPhone: [
        '',
        [Validators.required, Validators.pattern('[0-9]{10,15}')],
      ],
    });
  }

  register(): void {
    if (this.registrationForm.invalid) {
      alert('Please fill in all required fields.');
      this.registrationForm.markAllAsTouched(); 
      return;
    }

    // If form is valid, proceed with registration
    const userData = this.registrationForm.value;
    console.log('User registration data:', userData);
    alert('Registration successful!');
    this.resetForm();
  }

  resetForm(): void {
    this.registrationForm.reset();
  }
}
