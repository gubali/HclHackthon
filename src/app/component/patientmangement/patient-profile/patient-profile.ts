import { Component } from '@angular/core';
import { PatientService } from '../../../services/patient-service';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-patient-profile',
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './patient-profile.html',
  styleUrl: './patient-profile.scss',
  providers: [PatientService],
})
export class PatientProfile {
  patientForm: FormGroup | undefined;
  patient: any;
  errorMessage: string | undefined;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    // Initialize the form with empty or default values
    this.patientForm = new FormGroup({
      profileImage: new FormControl(''),
      fullName: new FormControl(''),
      email: new FormControl(''),
      dob: new FormControl(''),
      gender: new FormControl(''),
      phone: new FormControl(''),
      bloodGroup: new FormControl(''),
      address: new FormControl(''),
      medicalConditions: new FormControl(''),
      emergencyContactName: new FormControl(''),
      emergencyContactPhone: new FormControl(''),
    });

    this.getPatients();
  }

  getPatients(): void {
    this.patientService.getPatients().subscribe({
      next: (data) => {
        this.patient = Array.isArray(data) ? data[0] : data;
        this.setFormValues(this.patient);
        this.errorMessage = '';
      },
      error: (error) => {
        this.errorMessage = 'Failed to load patients data';
        console.error('Error fetching patients:', error);
      },
    });
  }

  setFormValues(patient: any): void {
    if (this.patientForm) {
      this.patientForm.patchValue({
        profileImage:
          patient.profileImage || 'https://via.placeholder.com/120?text=User',
        fullName: patient.fullName || 'Patient Name',
        email: patient.email || 'Email address',
        dob: patient.dob || '-',
        gender: patient.gender || '-',
        phone: patient.phone || '-',
        bloodGroup: patient.bloodGroup || '-',
        address: patient.address || '-',
        medicalConditions: patient.medicalConditions || '-',
        emergencyContactName: patient.emergencyContactName || '-',
        emergencyContactPhone: patient.emergencyContactPhone || '-',
      });
    }
  }
}
