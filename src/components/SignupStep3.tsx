import React, { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

interface SignupStep3Props {
  onComplete: (data: { school: string }) => void;
  onBack: () => void;
}

export const SignupStep3: React.FC<SignupStep3Props> = ({ onComplete, onBack }) => {
  const [formData, setFormData] = useState({
    school: '',
    searchTerm: ''
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Mock school data
  const schools = [
    { name: '대구소프트웨어마이스터고등학교', location: '대구 달성군' },
    { name: '대구소프트웨어마이스터고등학교', location: '대구 달성군' },
    { name: '광주소프트웨어마이스터고등학교', location: '광주 광산구' },
    { name: '부산소프트웨어마이스터고등학교', location: '부산 강서구' }
  ];

  const filteredSchools = schools.filter(school =>
    school.name.toLowerCase().includes(formData.searchTerm.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      searchTerm: value,
      school: ''
    }));
    setIsDropdownOpen(value.length > 0);
  };

  const handleSchoolSelect = (school: { name: string; location: string }) => {
    setFormData(prev => ({
      ...prev,
      school: school.name,
      searchTerm: school.name
    }));
    setIsDropdownOpen(false);
  };

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.school) {
      onComplete({ school: formData.school });
    }
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

      <form onSubmit={handleComplete} className="space-y-6">
        <div>
          <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-2">
            학교 설정
          </label>
          <div className="relative">
            <input
              type="text"
              id="school"
              value={formData.searchTerm}
              onChange={handleSearchChange}
              onFocus={() => setIsDropdownOpen(formData.searchTerm.length > 0)}
              placeholder="본인의 학교를 선택하세요."
              className="w-full px-4 py-3 bg-gray-100 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 pr-12"
              required
            />
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            
            {isDropdownOpen && filteredSchools.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                {filteredSchools.map((school, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleSchoolSelect(school)}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center justify-between border-b border-gray-100 last:border-b-0"
                  >
                    <span className="font-medium text-gray-800">{school.name}</span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {school.location}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-3 pt-4">
          <button
            type="submit"
            disabled={!formData.school}
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