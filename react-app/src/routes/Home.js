import React, { useState } from 'react';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';
import mainImg from '../assets/main-img.png';
import searchIcon from '../assets/search-icon2.png';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search submitted:', searchTerm);
  };

  // Sample post data
  const posts = Array(10).fill(null).map((_, index) => ({
    id: index,
    title: "분실물명",
    time: "0분 전",
    location: "분실장소"
  }));

  return (
    <div>
      <Header />
      <main>
        <section className="intro" style={{ position: 'relative' }}>
          <img 
            className="main-school-img" 
            src={mainImg} 
            alt="dgsw"
            style={{ width: '100%' }}
          />
          <div className="intro-over" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '26px 0px'
          }}>
            <p className="intro-font" style={{
              color: 'white',
              fontFamily: "'GongGothicMedium', sans-serif",
              fontSize: '2.25rem',
              textShadow: '0px 0px 5.5px rgb(0, 0, 0, 0.7)',
              margin: 0
            }}>
              대소고에서 어떤 물건을 찾으시나요?
            </p>
            
            <form onSubmit={handleSearchSubmit}>
              <div className="search-wrapper" style={{
                position: 'relative',
                width: '598px'
              }}>
                <input 
                  className="search" 
                  type="text" 
                  placeholder="대구소프트웨어마이스터고에서 찾을 물건을 검색해보세요."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    height: '57px',
                    borderRadius: '20px',
                    border: 'solid 1px #B4B4B4',
                    padding: '20px 50px 20px 20px',
                    boxSizing: 'border-box',
                    fontSize: '16px'
                  }}
                />
                <button 
                  type="submit"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '20px',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  <img 
                    className="search-icon" 
                    src={searchIcon}
                    alt="검색"
                    style={{
                      width: '23.12px',
                      height: '23px'
                    }}
                  />
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="latest-item">
          <div>
            <div className="latest-item-text-area" style={{
              width: '100%',
              height: '80px',
              fontSize: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: '70px',
              fontWeight: '500',
              color: '#0F0F0F'
            }}>
              <p>최근 등록된 게시물</p>
            </div>
          </div>
          <div className="divider" style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#C0C0C0'
          }}></div>
          <div className="card-container" style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px 18px',
            justifyContent: 'center',
            padding: '20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {posts.map((post) => (
              <PostCard 
                key={post.id}
                title={post.title}
                time={post.time}
                location={post.location}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;