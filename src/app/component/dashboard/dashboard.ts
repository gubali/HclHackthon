import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { PatientProfile } from '../patientmangement/patient-profile/patient-profile';

@Component({
  selector: 'app-dashboard',
  imports: [Navbar, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
