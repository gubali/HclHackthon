const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    dob: { type: String, required: true },
    gender: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    medicalConditions: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    emergencyContactName: { type: String, required: true },
    emergencyContactPhone: { type: String, required: true },
    profileImage: { type: String, required: true }
});

const Patient = mongoose.model('Patient', patientSchema, 'patients'); 

module.exports = Patient;
