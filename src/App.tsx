import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LandingPage } from './components/landing/LandingPage';
import { RoleSelection } from './components/landing/RoleSelection';
import { AuthForm } from './components/auth/AuthForm';
import { HospitalDashboard } from './components/hospital/HospitalDashboard';
import { PatientDashboard } from './components/patient/PatientDashboard';

type AppState = 'landing' | 'role-selection' | 'hospital-auth' | 'patient-auth' | 'dashboard';

const AppContent: React.FC = () => {
  const [currentState, setCurrentState] = useState<AppState>('landing');
  const { user } = useAuth();

  // If user is logged in, show appropriate dashboard
  if (user) {
    return user.type === 'hospital' ? <HospitalDashboard /> : <PatientDashboard />;
  }

  // Handle different states
  switch (currentState) {
    case 'landing':
      return (
        <LandingPage
          onGetStarted={() => setCurrentState('role-selection')}
        />
      );
    
    case 'role-selection':
      return (
        <RoleSelection
          onSelectRole={(role) => setCurrentState(role === 'hospital' ? 'hospital-auth' : 'patient-auth')}
          onBack={() => setCurrentState('landing')}
        />
      );
    
    case 'hospital-auth':
      return (
        <AuthForm
          type="hospital"
          onBack={() => setCurrentState('role-selection')}
        />
      );
    
    case 'patient-auth':
      return (
        <AuthForm
          type="patient"
          onBack={() => setCurrentState('role-selection')}
        />
      );
    
    default:
      return (
        <LandingPage
          onGetStarted={() => setCurrentState('role-selection')}
        />
      );
  }
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <AppContent />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;