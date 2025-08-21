import React, { useState } from 'react';
import { Plus, Search, Users, FileText, Activity, Calendar } from 'lucide-react';
import { Header } from '../shared/Header';
import { CreateRecordModal } from './CreateRecordModal';
import { MedicalRecord } from '../../types';

export const HospitalDashboard: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [records, setRecords] = useState<MedicalRecord[]>([
    {
      id: '1',
      patientId: 'p1',
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
    }
  ]);

  const handleCreateRecord = (recordData: Partial<MedicalRecord>) => {
    const newRecord: MedicalRecord = {
      id: Math.random().toString(36).substr(2, 9),
      patientId: recordData.patientId || '',
      hospitalId: 'current-hospital',
      hospitalName: 'General Hospital',
      doctorName: recordData.doctorName || '',
      visitDate: recordData.visitDate || new Date().toISOString().split('T')[0],
      diagnosis: recordData.diagnosis || '',
      symptoms: recordData.symptoms || [],
      treatment: recordData.treatment || '',
      medications: recordData.medications || [],
      attachments: [],
      encrypted: true,
      shared: false,
      createdAt: new Date()
    };
    setRecords([...records, newRecord]);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Hospital Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage patient records and healthcare data securely
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-200">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">1,234</h3>
                <p className="text-gray-600 dark:text-gray-400">Total Patients</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-200">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                <FileText className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{records.length}</h3>
                <p className="text-gray-600 dark:text-gray-400">Medical Records</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-200">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900">
                <Calendar className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">28</h3>
                <p className="text-gray-600 dark:text-gray-400">Today's Visits</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-200">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900">
                <Activity className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">95%</h3>
                <p className="text-gray-600 dark:text-gray-400">System Uptime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions and Records */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-colors duration-200">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-0">
                Recent Medical Records
              </h2>
              <div className="flex space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search records..."
                    className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                  />
                </div>
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <Plus className="h-5 w-5" />
                  <span>New Record</span>
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            {records.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No records found</h3>
                <p className="text-gray-600 dark:text-gray-400">Create your first medical record to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {records.map((record) => (
                  <div key={record.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                            {record.diagnosis}
                          </h4>
                          <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                            Encrypted
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                          Dr. {record.doctorName} • {new Date(record.visitDate).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {record.treatment}
                        </p>
                        {record.symptoms.length > 0 && (
                          <div className="mt-2">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Symptoms: </span>
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {record.symptoms.join(', ')}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="ml-4 flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                          View
                        </button>
                        <button className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                          Share
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

      {showCreateModal && (
        <CreateRecordModal
          onClose={() => setShowCreateModal(false)}
          onSubmit={handleCreateRecord}
        />
      )}
    </div>
  );
};