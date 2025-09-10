import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface LoginFormProps {
  onSignupClick: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSignupClick }) => {
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    saveId: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  return (
    <>
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="flex items-center space-x-2">
            <MapPin className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">어디</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-2">
            아이디
          </label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleInputChange}
            placeholder="아이디 입력"
            className="w-full px-4 py-3 bg-gray-100 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="비밀번호 입력"
            className="w-full px-4 py-3 bg-gray-100 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200"
            required
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="saveId"
            name="saveId"
            checked={formData.saveId}
            onChange={handleInputChange}
            className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="saveId" className="ml-3 text-sm text-gray-600">
            아이디 저장
          </label>
        </div>

        <div className="space-y-3 pt-4">
          <button
            type="submit"
            className="w-full py-4 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
          >
            로그인
          </button>
          
          <button
            type="button"
            onClick={onSignupClick}
            className="w-full py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold border-2 border-gray-200 hover:border-gray-300 rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
          >
            이메일로 회원가입
          </button>
        </div>
      </form>
    </>
  );
};