import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient/patient.model.';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
 private apiUrl = 'http://localhost:8000/api/patients';
  constructor(private http:HttpClient) { }
   getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
  }
}
