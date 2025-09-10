import React, { useState } from 'react';
import { AuthContainer } from './components/AuthContainer';
import { LoginForm } from './components/LoginForm';
import { SignupStep1 } from './components/SignupStep1';
import { SignupStep2 } from './components/SignupStep2';
import { SignupStep3 } from './components/SignupStep3';

type AuthStep = 'login' | 'signup-step1' | 'signup-step2' | 'signup-step3' | 'complete';

interface SignupData {
  name: string;
  userId: string;
  password: string;
  confirmPassword: string;
  school: string;
}

function App() {
  const [currentStep, setCurrentStep] = useState<AuthStep>('login');
  const [signupData, setSignupData] = useState<Partial<SignupData>>({});

  const handleSignupStart = () => {
    setCurrentStep('signup-step1');
  };

  const handleStep1Complete = (data: { name: string; userId: string }) => {
    setSignupData(prev => ({ ...prev, ...data }));
    setCurrentStep('signup-step2');
  };

  const handleStep2Complete = (data: { password: string; confirmPassword: string }) => {
    setSignupData(prev => ({ ...prev, ...data }));
    setCurrentStep('signup-step3');
  };

  const handleStep3Complete = (data: { school: string }) => {
    setSignupData(prev => ({ ...prev, ...data }));
    setCurrentStep('complete');
    console.log('Registration complete:', { ...signupData, ...data });
    
    // Simulate successful registration and redirect to login
    setTimeout(() => {
      setCurrentStep('login');
      setSignupData({});
    }, 2000);
  };

  const handleBackToLogin = () => {
    setCurrentStep('login');
    setSignupData({});
  };

  const handleBackToStep1 = () => {
    setCurrentStep('signup-step1');
  };

  const handleBackToStep2 = () => {
    setCurrentStep('signup-step2');
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'login':
        return <LoginForm onSignupClick={handleSignupStart} />;
      
      case 'signup-step1':
        return (
          <SignupStep1 
            onNext={handleStep1Complete} 
            onBack={handleBackToLogin}
          />
        );
      
      case 'signup-step2':
        return (
          <SignupStep2 
            onNext={handleStep2Complete} 
            onBack={handleBackToStep1}
          />
        );
      
      case 'signup-step3':
        return (
          <SignupStep3 
            onComplete={handleStep3Complete} 
            onBack={handleBackToStep2}
          />
        );
      
      case 'complete':
        return (
          <div className="text-center py-12">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">회원가입 완료!</h2>
              <p className="text-gray-600">
                환영합니다! 잠시 후 로그인 페이지로 이동합니다.
              </p>
            </div>
          </div>
        );
      
      default:
        return <LoginForm onSignupClick={handleSignupStart} />;
    }
  };

  return (
    <AuthContainer>
      {renderCurrentStep()}
    </AuthContainer>
  );
}

export default App;