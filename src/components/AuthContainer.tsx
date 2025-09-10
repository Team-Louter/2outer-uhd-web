import React from 'react';
// 1. 이미지를 import로 불러옵니다.
import logoImage from '../assets/frame4.png'; 

interface AuthContainerProps {
  children: React.ReactNode;
}

export const AuthContainer: React.FC<AuthContainerProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center p-4 min-h-screen bg-[#E5E7EF]">
      <div className="flex overflow-hidden w-full max-w-5xl bg-white rounded-3xl shadow-2xl">
        {/* Left Panel - Advertisement */}
        <div className="flex flex-col flex-1 justify-center items-center p-12 text-center bg-white">
          
          {/* 2. <img> 태그를 사용해 이미지를 추가합니다. */}
          <img 
            src={logoImage} 
            alt="서비스 로고" 
            className="mb-8 w-32 h-32" 
          />
          
          <h2 className="mb-4 text-3xl font-bold text-gray-800">
            내 물건 <span className="text-gray-800">어디갔지?</span>
          </h2>
          
          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            학교에서 잃어버린 내 물건, <br />
            <span className="font-semibold text-blue-600">'어디'</span>에서 손쉽게 찾아보세요!
          </p>
          
          <div className="flex space-x-3">
            <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          </div>
        </div>

        {/* Right Panel - Forms */}
        <div className="flex flex-col flex-1 justify-center p-12">
          {children}
        </div>
      </div>
    </div>
  );
};