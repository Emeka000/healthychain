export interface User {
  id: string;
  email: string;
  name: string;
  type: 'hospital' | 'patient';
  createdAt: Date;
}

export interface Hospital extends User {
  hospitalName: string;
  licenseNumber: string;
  address: string;
  phone: string;
  specialties: string[];
  verified: boolean;
}

export interface Patient extends User {
  dateOfBirth: string;
  phone: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  bloodType: string;
  allergies: string[];
}

export interface MedicalRecord {
  id: string;
  patientId: string;
  hospitalId: string;
  hospitalName: string;
  doctorName: string;
  visitDate: string;
  diagnosis: string;
  symptoms: string[];
  treatment: string;
  medications: Medication[];
  attachments: string[];
  encrypted: boolean;
  shared: boolean;
  createdAt: Date;
}

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
}

export type Theme = 'light' | 'dark';