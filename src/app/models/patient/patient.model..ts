export class Patient {
  fullName: string = '';
  dob: string = '';
  gender: string = '';
  phone: string = '';
  email: string = '';
  address: string = '';
  bloodGroup: string = '';
  medicalConditions: string = '';
  password: string = '';
  confirmPassword: string = '';
  emergencyContactName: string = '';
  emergencyContactPhone: string = '';
  profileImage: string = ''

  constructor(init?: Partial<Patient>) {
    Object.assign(this, init);
  }
}