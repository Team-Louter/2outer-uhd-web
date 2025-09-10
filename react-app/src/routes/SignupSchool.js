import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignupSchool() {
  const [school, setSchool] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('School submitted:', school);
    alert('회원가입이 완료되었습니다!');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        width: '400px'
      }}>
        <h1 style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: '#1A1E47'
        }}>
          회원가입 - 학교 선택
        </h1>
        
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#333'
            }}>
              학교 선택
            </label>
            <select 
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '16px',
                backgroundColor: 'white'
              }}
            >
              <option value="" disabled>학교를 선택하세요</option>
              <option value="daegu-software">대구소프트웨어마이스터고등학교</option>
              <option value="other">기타</option>
            </select>
          </div>

          <button type="submit" style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#1A1E47',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            회원가입 완료
          </button>

          <Link to="/signup/password" style={{
            textAlign: 'center',
            color: '#666',
            textDecoration: 'none',
            fontSize: '14px'
          }}>
            이전 단계로
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignupSchool;