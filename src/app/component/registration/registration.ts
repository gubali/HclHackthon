import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-registration',
  imports: [FormsModule,RouterModule],
  templateUrl: './registration.html',
  styleUrl: './registration.scss'
})
export class Registration {
 fullName = '';
  dob = '';
  gender = '';
  phone = '';
  email = '';
  address = '';
  bloodGroup = '';
  medicalConditions = '';
  password = '';
  confirmPassword = '';
  emergencyContactName = '';
  emergencyContactPhone = '';
   register() {
    // Basic validation example: check password match
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Check required fields (simple check, can be more thorough)
    if (
      !this.fullName ||
      !this.dob ||
      !this.gender ||
      !this.phone ||
      !this.email ||
      !this.address ||
      !this.bloodGroup ||
      !this.password ||
      !this.emergencyContactName ||
      !this.emergencyContactPhone
    ) {
      alert('Please fill in all required fields.');
      return;
    }


    const userData = {
      fullName: this.fullName,
      dob: this.dob,
      gender: this.gender,
      phone: this.phone,
      email: this.email,
      address: this.address,
      bloodGroup: this.bloodGroup,
      medicalConditions: this.medicalConditions,
      password: this.password,
      emergencyContactName: this.emergencyContactName,
      emergencyContactPhone: this.emergencyContactPhone,
    };

    console.log('User registration data:', userData);
    alert('Registration successful!');
    this.resetForm();
  }
   resetForm() {
    this.fullName = '';
    this.dob = '';
    this.gender = '';
    this.phone = '';
    this.email = '';
    this.address = '';
    this.bloodGroup = '';
    this.medicalConditions = '';
    this.password = '';
    this.confirmPassword = '';
    this.emergencyContactName = '';
    this.emergencyContactPhone = '';
  }
}
