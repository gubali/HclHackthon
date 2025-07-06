import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PatientService } from '../../services/patient-service';

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
  imports: [RouterModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './registration.html',
  styleUrls: ['./registration.scss'],
  providers: [PatientService],
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private router: Router
  ) {}

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
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required, passwordMatchValidator()]],
      emergencyContactName: ['', Validators.required],
      profileImage: [
        'https://img.freepik.com/premium-vector/avatar-icon0002_750950-43.jpg',
        Validators.required,
      ],
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
    this.patientService.addPatient(this.registrationForm.value).subscribe({
      next: (response) => {
        console.log('Patient registered successfully:', response);
        this.resetForm();
       this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Error registering patient:', error);
        alert('Registration failed. Please try again.');
      },
    });
    this.resetForm();
  }

  resetForm(): void {
    this.registrationForm.reset();
  }
}
