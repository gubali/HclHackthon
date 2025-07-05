import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { PatientComponent } from '../patientmangement/patient/patient';

@Component({
  selector: 'app-dashboard',
  imports: [Navbar, RouterOutlet,PatientComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
