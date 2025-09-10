import React, { useState } from 'react';

function FilterForm({ 
  title = "필터",
  description = "검색 및 필터링을 통해 원하는 게시물을 찾아보세요.",
  categoryPlaceholder = "분실물 종류를 선택하세요.",
  titleColor = "rgb(60, 113, 205)"
}) {
  const [formData, setFormData] = useState({
    searchTerm: '',
    date: '',
    category: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Filter form submitted:', formData);
  };

  return (
    <form className="filter" onSubmit={handleSubmit} style={{
      width: '303px',
      height: 'auto',
      display: 'block',
      borderRight: '1px solid #C0C0C0',
      paddingTop: '27px',
      paddingRight: '42px'
    }}>
      <div className="filter-section" style={{
        width: 'auto',
        height: '80px',
        marginBottom: '20px'
      }}>
        <p className="category-title" style={{
          fontSize: '26px',
          fontWeight: '700',
          color: titleColor,
          marginBottom: '5px'
        }}>
          {title}
        </p>
        <p className="category-description" style={{
          fontSize: '16px',
          color: 'rgb(128, 128, 128)',
          margin: '0px'
        }}>
          {description}
        </p>
      </div>

      <div className="filter-section" style={{
        width: 'auto',
        marginBottom: '20px'
      }}>
        <p className="filter-title" style={{
          fontSize: '20px',
          fontWeight: '700',
          color: 'rgb(15, 15, 15)',
          marginBottom: '10px'
        }}>
          검색어
        </p>
        <div className="inputbutton-frame" style={{
          display: 'flex',
          gap: '10px'
        }}>
          <div className="filter-input" style={{
            flex: 1,
            height: '40px',
            border: '1px solid #C0C0C0',
            borderRadius: '5px'
          }}>
            <input 
              type="text" 
              name="searchTerm"
              value={formData.searchTerm}
              onChange={handleInputChange}
              placeholder="검색어를 입력하세요."
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                padding: '0 10px',
                fontSize: '14px'
              }}
            />
          </div>
          <button 
            type="submit" 
            className="filter-searchbutton"
            style={{
              width: '60px',
              height: '40px',
              backgroundColor: '#1A1E47',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '700'
            }}
          >
            검색
          </button>
        </div>
      </div>

      <div className="filter-section" style={{
        width: 'auto',
        marginBottom: '20px'
      }}>
        <p className="filter-title" style={{
          fontSize: '20px',
          fontWeight: '700',
          color: 'rgb(15, 15, 15)',
          marginBottom: '10px'
        }}>
          등록일
        </p>
        <div className="inputbutton-frame">
          <div className="filter-input" style={{
            height: '40px',
            border: '1px solid #C0C0C0',
            borderRadius: '5px'
          }}>
            <input 
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                padding: '0 10px',
                fontSize: '14px'
              }}
            />
          </div>
        </div>
      </div>

      <div className="filter-section" style={{
        width: 'auto',
        marginBottom: '20px'
      }}>
        <p className="filter-title" style={{
          fontSize: '20px',
          fontWeight: '700',
          color: 'rgb(15, 15, 15)',
          marginBottom: '10px'
        }}>
          카테고리
        </p>
        <div className="inputbutton-frame">
          <div className="filter-input" style={{
            height: '40px',
            border: '1px solid #C0C0C0',
            borderRadius: '5px'
          }}>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                padding: '0 10px',
                fontSize: '14px',
                backgroundColor: 'white'
              }}
            >
              <option value="" disabled>{categoryPlaceholder}</option>
              <option value="electronics">전자기기</option>
              <option value="clothing">의류/악세사리</option>
              <option value="others">기타</option>
            </select>
          </div>
        </div>
      </div>
    </form>
  );
}

export default FilterForm;