import React from 'react';
import sampleImage from '../../assets/image.png';

function PostCard({ title = "분실물명", time = "0분 전", location = "분실장소", image = sampleImage }) {
  return (
    <div className="post-card" style={{
      width: '237px',
      height: '271px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      borderRadius: '10px',
      boxShadow: '1px 1px 4px 0px rgba(0, 0, 0, 0.15)'
    }}>
      <div className="card-imgbox" style={{
        width: '206px',
        height: '160px',
        marginTop: '15px'
      }}>
        <img 
          src={image} 
          alt="" 
          className="card-img"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px'
          }}
        />
      </div>
      <div className="card-textbox" style={{
        width: '206px',
        height: '42px',
        display: 'flex',
        marginTop: '24px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0px'
      }}>
        <span className="post-title" style={{
          color: 'rgb(15, 15, 15)',
          fontSize: '20px',
          marginBottom: '5px'
        }}>
          {title}
        </span>
        <div className="lost-info" style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center'
        }}>
          <p className="lost-time" style={{
            color: 'rgb(128, 128, 128)',
            fontSize: '12px',
            margin: '0px'
          }}>
            {time}
          </p>
          <p className="lost-location" style={{
            color: 'rgb(128, 128, 128)',
            fontSize: '12px',
            margin: '0px'
          }}>
            · {location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostCard;