import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface SignupStep1Props {
  onNext: (data: { name: string; userId: string }) => void;
  onBack: () => void;
}

export const SignupStep1: React.FC<SignupStep1Props> = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    userId: ''
  });

  const [isIdChecked, setIsIdChecked] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (name === 'userId') {
      setIsIdChecked(false);
    }
  };

  const handleIdCheck = () => {
    if (formData.userId) {
      setIsIdChecked(true);
      // Simulate ID check
      console.log('Checking ID availability:', formData.userId);
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.userId && isIdChecked) {
      onNext(formData);
    }
  };

  return (
    <>
      <div className="mb-8 text-center">
        <div className="flex justify-center items-center mb-4">
          <div className="flex items-center space-x-2">
            <MapPin className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">어디</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleNext} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
            성명
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="성명 입력"
            className="px-4 py-3 w-full bg-gray-100 rounded-xl border-0 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:bg-white"
            required
          />
        </div>

        <div>
          <label htmlFor="userId" className="block mb-2 text-sm font-medium text-gray-700">
            아이디
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              id="userId"
              name="userId"
              value={formData.userId}
              onChange={handleInputChange}
              placeholder="아이디 입력"
              className="flex-1 px-4 py-3 bg-gray-100 rounded-xl border-0 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:bg-white"
              required
            />
            <button
              type="button"
              onClick={handleIdCheck}
              className="px-6 py-3 text-sm font-medium text-white bg-gray-600 rounded-xl transition-colors duration-200 hover:bg-gray-700"
            >
              중복확인
            </button>
          </div>
          {isIdChecked && (
            <p className="mt-2 text-sm text-green-600">✓ 사용 가능한 아이디입니다.</p>
          )}
        </div>

        <div className="pt-4 space-y-3">
          <button
            type="submit"
            disabled={!formData.name || !formData.userId || !isIdChecked}
            className="w-full py-4 bg-blue-900 hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
          >
            다음
          </button>
          
          <p className="text-sm text-center text-gray-500">
            이미 계정이 있으신가요?{' '}
            <button
              type="button"
              onClick={onBack}
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              로그인
            </button>
          </p>
        </div>
      </form>
    </>
  );
};