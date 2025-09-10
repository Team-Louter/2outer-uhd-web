import React, { useState } from 'react';

function FoundRegister() {
  const [formData, setFormData] = useState({
    objectname: '',
    location: '',
    description: '',
    category: '',
    meetLocation: ''
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategoryChange = (category) => {
    setFormData(prev => ({
      ...prev,
      category: category
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Found item registered:', formData);
    alert('분실물이 등록되었습니다!');
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '20px'
    }}>
      <div className="box1" style={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: 'white',
        marginBottom: '20px'
      }}>
        <h1 style={{
          color: '#1A1E47',
          fontSize: '2rem',
          margin: 0
        }}>
          분실물 등록 - 찾았어요
        </h1>
      </div>

      <div className="inline" style={{
        display: 'flex',
        gap: '40px',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '10px'
      }}>
        <form className="container" onSubmit={handleSubmit} style={{
          flex: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: '25px'
        }}>
          <div>
            <h4 style={{
              marginBottom: '10px',
              fontSize: '18px',
              fontWeight: '600'
            }}>
              물품명*
            </h4>
            <div className="inputbox">
              <input 
                type="text" 
                name="objectname" 
                placeholder="잃어버린 물건의 이름을 입력하세요." 
                value={formData.objectname}
                onChange={handleInputChange}
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
          </div>

          <div>
            <h4 style={{
              marginBottom: '10px',
              fontSize: '18px',
              fontWeight: '600'
            }}>
              예상위치
            </h4>
            <div className="inputbox">
              <input 
                type="text" 
                name="location" 
                placeholder="분실물이 있을 것으로 예상되는 위치를 입력하세요."
                value={formData.location}
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
          </div>

          <div>
            <h4 style={{
              marginBottom: '10px',
              fontSize: '18px',
              fontWeight: '600'
            }}>
              간단설명*
            </h4>
            <div className="biginputbox">
              <textarea 
                name="description" 
                placeholder="분실물에 대해 간단히 설명해주세요(100자 이내)" 
                value={formData.description}
                onChange={handleInputChange}
                required
                maxLength={100}
                style={{
                  width: '100%',
                  height: '100px',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '16px',
                  resize: 'vertical'
                }}
              />
            </div>
          </div>

          <div>
            <h4 style={{
              marginBottom: '10px',
              fontSize: '18px',
              fontWeight: '600'
            }}>
              카테고리*
            </h4>
            <div className="checkbox" style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              {['전자기기', '의류/악세사리', '기타'].map((category) => (
                <label key={category} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer'
                }}>
                  <input 
                    type="radio" 
                    name="category"
                    value={category}
                    checked={formData.category === category}
                    onChange={() => handleCategoryChange(category)}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{
              marginBottom: '10px',
              fontSize: '18px',
              fontWeight: '600'
            }}>
              만날장소*
            </h4>
            <div className="inputbox">
              <input 
                type="text" 
                name="meetLocation" 
                placeholder="물건을 전달할 장소를 입력하세요." 
                value={formData.meetLocation}
                onChange={handleInputChange}
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
          </div>

          <button type="submit" style={{
            padding: '15px 30px',
            backgroundColor: '#1A1E47',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '20px'
          }}>
            등록하기
          </button>
        </form>

        <div className="upload-box" style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <label htmlFor="fileInput" className="upload-label" style={{
            width: '300px',
            height: '300px',
            border: '2px dashed #ddd',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            backgroundColor: '#fafafa',
            transition: 'all 0.3s ease'
          }}>
            {imagePreview ? (
              <img 
                src={imagePreview} 
                alt="미리보기" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
            ) : (
              <>
                <p style={{
                  fontSize: '3rem',
                  margin: '0 0 10px 0',
                  color: '#999'
                }}>
                  ⬆️
                </p>
                <div className="upload-text" style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#666'
                }}>
                  이미지 업로드
                </div>
              </>
            )}
            <input 
              type="file" 
              id="fileInput" 
              accept="image/*" 
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default FoundRegister;