import React, { useState } from 'react';
import { MapPin, Eye, EyeOff } from 'lucide-react';

interface SignupStep2Props {
  onNext: (data: { password: string; confirmPassword: string }) => void;
  onBack: () => void;
}

export const SignupStep2: React.FC<SignupStep2Props> = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'password') {
      // Simple password validation
      const isValid = value.length >= 8 && /[A-Za-z]/.test(value) && /[0-9]/.test(value);
      setIsPasswordValid(isValid);
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password && formData.confirmPassword && 
        formData.password === formData.confirmPassword && isPasswordValid) {
      onNext(formData);
    }
  };

  const passwordsMatch = formData.password === formData.confirmPassword;

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

      <form onSubmit={handleNext} className="space-y-6">
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            비밀번호 설정
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="비밀번호 입력 (숫자, 특수문자 포함 8자 이상)"
              className="w-full px-4 py-3 bg-gray-100 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 pr-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {formData.password && (
            <p className={`mt-2 text-sm ${isPasswordValid ? 'text-green-600' : 'text-red-500'}`}>
              {isPasswordValid ? '✓ 비밀번호가 유효합니다.' : '✗ 숫자, 문자 포함 8자 이상 입력해주세요.'}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
            비밀번호 확인
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="비밀번호 다시 입력"
              className="w-full px-4 py-3 bg-gray-100 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 pr-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {formData.confirmPassword && (
            <p className={`mt-2 text-sm ${passwordsMatch ? 'text-green-600' : 'text-red-500'}`}>
              {passwordsMatch ? '✓ 비밀번호가 일치합니다.' : '✗ 비밀번호가 일치하지 않습니다.'}
            </p>
          )}
        </div>

        <div className="space-y-3 pt-4">
          <button
            type="submit"
            disabled={!formData.password || !formData.confirmPassword || !passwordsMatch || !isPasswordValid}
            className="w-full py-4 bg-blue-900 hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
          >
            다음
          </button>
          
          <button
            type="button"
            onClick={onBack}
            className="w-full py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold border-2 border-gray-200 hover:border-gray-300 rounded-xl transition-all duration-200"
          >
            이전으로
          </button>
        </div>
      </form>
    </>
  );
};