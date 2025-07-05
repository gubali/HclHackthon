import { Component, OnInit } from '@angular/core';
import { Patient } from '../../../models/patient/patient.model.';
@Component({
  selector: 'app-patient',
  imports: [],
  templateUrl: './patient.html',
  styleUrl: './patient.scss',
})
export class PatientComponent implements OnInit {
  patient!: Patient;
  ngOnInit(): void {
    this.patient = new Patient({
      fullName: 'Jane Doe',
      dob: '1990-05-15',
      gender: 'Female',
      phone: '+1234567890',
      email: 'jane.doe@example.com',
      address: '123 Main Street, Springfield',
      bloodGroup: 'A+',
      medicalConditions: 'Asthma, Allergy to peanuts',
      emergencyContactName: 'John Doe',
      emergencyContactPhone: '+0987654321',
      profileImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    });
  }
}
