import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pinImg from '../assets/pin.png';
import logoImg from '../assets/uhd-logo 1.png';

function SignIn() {
  const [formData, setFormData] = useState({
    userid: '',
    password: '',
    saveid: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in submitted:', formData);
  };

  return (
    <div className="container" style={{
      display: 'flex',
      height: '100vh'
    }}>
      <div className="advertise" style={{
        flex: 1,
        backgroundColor: '#1A1E47',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: '40px'
      }}>
        <img src={pinImg} alt="pin" className="pin" style={{
          width: '80px',
          height: '80px',
          marginBottom: '30px'
        }}/>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          내 물건 <span style={{ color: '#3F48AE' }}>어디갔지?</span>
        </h2>
        <p style={{
          fontSize: '1.2rem',
          textAlign: 'center',
          lineHeight: '1.6',
          marginBottom: '40px'
        }}>
          학교에서 잃어버린 내 물건, <br/>'어디'에서 손쉽게 찾아보세요!
        </p> 
        <div className="dot" style={{
          display: 'flex',
          gap: '10px'
        }}>
          <span className="firstdot" style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#3F48AE'
          }}></span>
          <span className="seconddot" style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.3)'
          }}></span>
          <span className="thirddot" style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.3)'
          }}></span>
        </div>
      </div>

      <div className="reallogin" style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px'
      }}>
        <img src={logoImg} alt="ULogo" className="ulogo" style={{
          height: '60px',
          marginBottom: '40px'
        }}/>
        
        <form onSubmit={handleSubmit} style={{
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <div>
            <label htmlFor="userid" style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#333'
            }}>
              아이디
            </label>
            <input 
              type="text" 
              id="userid" 
              name="userid"
              placeholder="아이디 입력"
              value={formData.userid}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '16px'
              }}
            />
          </div>

          <div>
            <label htmlFor="password" style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#333'
            }}>
              비밀번호
            </label>
            <input 
              type="password" 
              id="password" 
              name="password"
              placeholder="비밀번호 입력"
              value={formData.password}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '16px'
              }}
            />
          </div>

          <div className="saveid" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <input 
              type="checkbox" 
              id="saveid" 
              name="saveid"
              checked={formData.saveid}
              onChange={handleInputChange}
            />
            <label htmlFor="saveid" style={{
              fontSize: '14px',
              color: '#666'
            }}>
              아이디 저장
            </label>
          </div>

          <button className="loginbutton" type="submit" style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#1A1E47',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '10px'
          }}>
            로그인
          </button>

          <Link to="/signup/id">
            <button className="signupbutton" type="button" style={{
              width: '100%',
              padding: '12px',
              backgroundColor: 'white',
              color: '#1A1E47',
              border: '1px solid #1A1E47',
              borderRadius: '5px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              이메일로 회원가입
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignIn;