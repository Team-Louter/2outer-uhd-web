import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignupID() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
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
          회원가입 - 이메일
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
              이메일 주소
            </label>
            <input 
              type="email" 
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '16px'
              }}
            />
          </div>

          <Link to="/signup/password">
            <button type="button" style={{
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
              다음
            </button>
          </Link>

          <Link to="/signin" style={{
            textAlign: 'center',
            color: '#666',
            textDecoration: 'none',
            fontSize: '14px'
          }}>
            이미 계정이 있으신가요? 로그인
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignupID;