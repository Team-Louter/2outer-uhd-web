import React from 'react';
import Header from '../components/layout/Header';
import FilterForm from '../components/common/FilterForm';
import PostCard from '../components/common/PostCard';

function Found() {
  // Sample post data
  const posts = Array(12).fill(null).map((_, index) => ({
    id: index,
    title: "분실물명",
    time: "0분 전",
    location: "분실장소"
  }));

  return (
    <div>
      <Header />
      <main style={{
        display: 'flex',
        gap: '42px',
        marginTop: '37px',
        justifyContent: 'center'
      }}>
        <FilterForm 
          title="찾았어요"
          description="현재 주인을 찾고 있는 물건들이에요."
          categoryPlaceholder="분실물 종류를 선택하세요."
          titleColor="rgb(60, 113, 205)"
        />
        
        <div className="card-container" style={{
          width: '1002px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px 18px',
          justifyContent: 'flex-start'
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
      </main>
    </div>
  );
}

export default Found;