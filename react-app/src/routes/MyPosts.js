import React from 'react';
import Header from '../components/layout/Header';

function MyPosts() {
  return (
    <div>
      <Header />
      <main style={{
        padding: '40px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2rem',
          color: '#1A1E47',
          marginBottom: '20px'
        }}>
          내 게시글
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#666',
          marginBottom: '40px'
        }}>
          내가 작성한 분실물 게시글을 확인할 수 있습니다.
        </p>
        <div style={{
          padding: '60px',
          backgroundColor: '#f8f9fa',
          borderRadius: '10px',
          color: '#666'
        }}>
          <p>아직 작성한 게시글이 없습니다.</p>
          <p>분실물을 등록하거나 찾은 물건을 등록해보세요!</p>
        </div>
      </main>
    </div>
  );
}

export default MyPosts;