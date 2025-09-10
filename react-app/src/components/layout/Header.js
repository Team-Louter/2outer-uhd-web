import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/uhd-logo 1.png';

function Header() {
  const location = useLocation();
  
  const getNavClass = (path) => {
    return location.pathname === path ? { color: '#3F48AE' } : {};
  };

  return (
    <header style={{
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: '80px',
      backgroundColor: 'white',
      borderBottom: '1px solid #C0C0C0',
      padding: '0 20px'
    }}>
      {/* 로고 */}
      <Link to="/">
        <img className="logo" src={logo} alt="logo" style={{ height: '70px' }} />
      </Link>

      {/* 메뉴 */}
      <nav className="nav">
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '100px'
        }}>
          <li>
            <Link 
              to="/intro" 
              style={{
                textDecoration: 'none',
                color: '#0F0F0F',
                fontWeight: '500',
                fontSize: '1.3rem',
                transition: 'color 0.3s ease',
                ...getNavClass('/intro')
              }}
            >
              서비스 소개
            </Link>
          </li>
          <li>
            <Link 
              to="/found" 
              style={{
                textDecoration: 'none',
                color: '#0F0F0F',
                fontWeight: '500',
                fontSize: '1.3rem',
                transition: 'color 0.3s ease',
                ...getNavClass('/found')
              }}
            >
              찾았어요
            </Link>
          </li>
          <li>
            <Link 
              to="/find" 
              style={{
                textDecoration: 'none',
                color: '#0F0F0F',
                fontWeight: '500',
                fontSize: '1.3rem',
                transition: 'color 0.3s ease',
                ...getNavClass('/find')
              }}
            >
              찾아요
            </Link>
          </li>
          <li>
            <Link 
              to="/myposts" 
              style={{
                textDecoration: 'none',
                color: '#0F0F0F',
                fontWeight: '500',
                fontSize: '1.3rem',
                transition: 'color 0.3s ease',
                ...getNavClass('/myposts')
              }}
            >
              내 게시글
            </Link>
          </li>
        </ul>
      </nav>

      {/* 버튼 */}
      <div className="header-btn" style={{
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
        gap: '10px'
      }}>
        <button 
          className="mypage"
          style={{
            width: '103px',
            height: '41px',
            border: 'solid 1px #808080',
            borderRadius: '10px',
            fontSize: '1rem',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
            color: '#1A1E47',
            backgroundColor: 'white'
          }}
        >
          마이페이지
        </button>
        <Link to="/found/register">
          <button 
            className="register"
            style={{
              width: '103px',
              height: '41px',
              border: 'none',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
              color: 'white',
              backgroundColor: '#1A1E47'
            }}
          >
            분실물 등록
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;