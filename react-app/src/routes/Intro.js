import React from 'react';
import Header from '../components/layout/Header';
import introImg from '../assets/intro-img.png';
import introTextImg from '../assets/intro-text-img.png';

function Intro() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Header />
      <main>
        <section className="intro" style={{ position: 'relative' }}>
          <img 
            className="main-school-img" 
            src={introImg} 
            alt="dgsw"
            style={{ width: '100%' }}
          />

          <div className="intro-over" style={{
            position: 'absolute',
            top: '50%',
            left: '10%',
            transform: 'translateY(-45%)',
            display: 'flex',
            flexDirection: 'column',
            color: 'white'
          }}>
            <div className="intro-lar-texts" style={{
              fontFamily: "'GongGothicMedium', sans-serif",
              fontSize: '2.25rem',
              fontWeight: '700',
              textShadow: '0 0 6px rgba(0, 0, 0, 0.6)',
              lineHeight: '50px'
            }}>
              <p>학교에서 잃어버린 분실물</p>
              <p>어떻게 찾을까요?</p>
            </div>
            <div className="intro-small-texts" style={{
              fontSize: '1.5rem',
              fontWeight: '400',
              textShadow: '0 0 4px rgba(0, 0, 0, 0.5)',
              maxWidth: '500px',
              lineHeight: '120px'
            }}>
              <p className="intro-small-text1" style={{
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center'
              }}>
                분실물 찾기 서비스, 
                <span style={{ margin: '0 4px' }}>
                  <img 
                    src={introTextImg} 
                    alt="어디"
                    style={{
                      height: '1em',
                      verticalAlign: 'text-top'
                    }}
                  />
                </span>
                가 그 고민을 해결해드립니다.
              </p>
              <p className="intro-small-text2">저희와 함께 여러분의 소중한 물건을 찾아볼까요?</p>
            </div>
          </div>
        </section>

        <section className="servise-introduce">
          <div>
            <div className="servise-introduce-area" style={{
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
              <div>서비스 이용 방법</div>
            </div>
          </div>
          
          <div className="divider" style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#C0C0C0'
          }}></div>
        </section>
      </main>
    </div>
  );
}

export default Intro;