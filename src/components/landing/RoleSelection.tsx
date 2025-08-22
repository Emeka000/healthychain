import React from 'react';
import { Building2, User, Shield, Database } from 'lucide-react';

interface RoleSelectionProps {
  onSelectRole: (role: 'hospital' | 'patient') => void;
  onBack?: () => void;
}

export const RoleSelection: React.FC<RoleSelectionProps> = ({ onSelectRole, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4 py-12">
        {onBack && (
          <button
            onClick={onBack}
            className="mb-8 flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            <span>← Back to Home</span>
          </button>
        )}
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Decentralized Healthcare Records
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Secure, transparent, and patient-controlled medical records on the blockchain
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div
            onClick={() => onSelectRole('hospital')}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 cursor-pointer transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-blue-500"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
                <Building2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Healthcare Provider
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Register your hospital or clinic to securely manage and share patient records
              </p>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <Database className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Create and manage medical records</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">HIPAA compliant data handling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Patient consent management</span>
                </div>
              </div>
              <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200">
                Join as Provider
              </button>
            </div>
          </div>

          <div
            onClick={() => onSelectRole('patient')}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 cursor-pointer transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-teal-500"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full mb-6">
                <User className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Patient
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Take control of your medical data and share it securely with healthcare providers
              </p>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Own and control your health data</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Database className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Access records from anywhere</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building2 className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Share with trusted providers</span>
                </div>
              </div>
              <button className="mt-6 w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200">
                Join as Patient
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Secure & Private</h4>
              <p className="text-gray-600 dark:text-gray-300">End-to-end encryption ensures your data stays private</p>
            </div>
            <div className="text-center">
              <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Decentralized</h4>
              <p className="text-gray-600 dark:text-gray-300">No single point of failure, distributed across the network</p>
            </div>
            <div className="text-center">
              <User className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Patient-Controlled</h4>
              <p className="text-gray-600 dark:text-gray-300">Patients have full control over who accesses their data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};