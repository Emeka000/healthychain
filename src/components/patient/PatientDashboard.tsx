import React, { useState } from 'react';
import { Search, FileText, Share2, Eye, Calendar, User, Activity } from 'lucide-react';
import { Header } from '../shared/Header';
import { MedicalRecord } from '../../types';

export const PatientDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [records] = useState<MedicalRecord[]>([
    {
      id: '1',
      patientId: 'current-patient',
      hospitalId: 'h1',
      hospitalName: 'General Hospital',
      doctorName: 'Dr. Sarah Johnson',
      visitDate: '2024-01-15',
      diagnosis: 'Hypertension',
      symptoms: ['High blood pressure', 'Headaches'],
      treatment: 'Lifestyle changes and medication',
      medications: [
        { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', duration: '30 days' }
      ],
      attachments: [],
      encrypted: true,
      shared: false,
      createdAt: new Date('2024-01-15')
    },
    {
      id: '2',
      patientId: 'current-patient',
      hospitalId: 'h2',
      hospitalName: 'City Medical Center',
      doctorName: 'Dr. Michael Chen',
      visitDate: '2024-01-20',
      diagnosis: 'Annual Checkup',
      symptoms: [],
      treatment: 'Continue current medications, schedule next checkup in 6 months',
      medications: [
        { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', duration: '30 days' },
        { name: 'Vitamin D3', dosage: '1000 IU', frequency: 'Once daily', duration: 'Ongoing' }
      ],
      attachments: [],
      encrypted: true,
      shared: true,
      createdAt: new Date('2024-01-20')
    }
  ]);

  const filteredRecords = records.filter(record =>
    record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.hospitalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.doctorName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            My Health Records
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Access and manage your medical records securely
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-200">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{records.length}</h3>
                <p className="text-gray-600 dark:text-gray-400">Total Records</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-200">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                <Share2 className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {records.filter(r => r.shared).length}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Shared Records</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-200">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900">
                <Calendar className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Jan 20</h3>
                <p className="text-gray-600 dark:text-gray-400">Last Visit</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-200">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900">
                <Activity className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">2</h3>
                <p className="text-gray-600 dark:text-gray-400">Active Meds</p>
              </div>
            </div>
          </div>
        </div>

        {/* Patient Profile Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 transition-colors duration-200">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-teal-100 dark:bg-teal-900 rounded-full">
              <User className="h-8 w-8 text-teal-600 dark:text-teal-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">John Doe</h3>
              <p className="text-gray-600 dark:text-gray-400">Patient ID: P-001234</p>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                <span>DOB: March 15, 1985</span>
                <span>Blood Type: O+</span>
                <span>Phone: (555) 123-4567</span>
              </div>
            </div>
            <div className="text-right">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                Verified
              </span>
            </div>
          </div>
        </div>

        {/* Search and Records */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-colors duration-200">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-0">
                Medical Records
              </h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search records..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                />
              </div>
            </div>
          </div>

          <div className="p-6">
            {filteredRecords.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No records found</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {searchTerm ? 'Try adjusting your search terms' : 'Your medical records will appear here'}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredRecords.map((record) => (
                  <div key={record.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                            {record.diagnosis}
                          </h4>
                          <div className="flex space-x-2">
                            <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                              Encrypted
                            </span>
                            {record.shared && (
                              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                                Shared
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Healthcare Provider</p>
                            <p className="text-gray-900 dark:text-white font-medium">{record.hospitalName}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Doctor</p>
                            <p className="text-gray-900 dark:text-white font-medium">{record.doctorName}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Visit Date</p>
                            <p className="text-gray-900 dark:text-white font-medium">
                              {new Date(record.visitDate).toLocaleDateString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Treatment</p>
                            <p className="text-gray-900 dark:text-white">{record.treatment}</p>
                          </div>
                        </div>

                        {record.symptoms.length > 0 && (
                          <div className="mb-4">
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Symptoms:</p>
                            <div className="flex flex-wrap gap-2">
                              {record.symptoms.map((symptom, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded-full"
                                >
                                  {symptom}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {record.medications.length > 0 && (
                          <div className="mb-4">
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Medications:</p>
                            <div className="space-y-2">
                              {record.medications.map((med, index) => (
                                <div key={index} className="bg-gray-50 dark:bg-gray-600 rounded-lg p-3">
                                  <div className="flex flex-wrap gap-4 text-sm">
                                    <span className="font-medium text-gray-900 dark:text-white">{med.name}</span>
                                    <span className="text-gray-600 dark:text-gray-400">{med.dosage}</span>
                                    <span className="text-gray-600 dark:text-gray-400">{med.frequency}</span>
                                    <span className="text-gray-600 dark:text-gray-400">{med.duration}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="ml-4 flex flex-col space-y-2">
                        <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">
                          <Eye className="h-4 w-4" />
                          <span className="text-sm">View</span>
                        </button>
                        <button className="flex items-center space-x-1 text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200">
                          <Share2 className="h-4 w-4" />
                          <span className="text-sm">Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};