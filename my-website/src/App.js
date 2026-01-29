import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [userName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const countries = [
    { name: 'United States', code: '+1', countryCode: 'us' },
    { name: 'Canada', code: '+1', countryCode: 'ca' },
    { name: 'United Kingdom', code: '+44', countryCode: 'gb' },
    { name: 'India', code: '+91', countryCode: 'in' },
    { name: 'Australia', code: '+61', countryCode: 'au' },
    { name: 'Germany', code: '+49', countryCode: 'de' },
    { name: 'France', code: '+33', countryCode: 'fr' },
    { name: 'Japan', code: '+81', countryCode: 'jp' },
    { name: 'China', code: '+86', countryCode: 'cn' },
    { name: 'Brazil', code: '+55', countryCode: 'br' },
    { name: 'Mexico', code: '+52', countryCode: 'mx' },
    { name: 'South Korea', code: '+82', countryCode: 'kr' },
    { name: 'Russia', code: '+7', countryCode: 'ru' },
    { name: 'Italy', code: '+39', countryCode: 'it' },
    { name: 'Spain', code: '+34', countryCode: 'es' },
    { name: 'Netherlands', code: '+31', countryCode: 'nl' },
    { name: 'Sweden', code: '+46', countryCode: 'se' },
    { name: 'Switzerland', code: '+41', countryCode: 'ch' },
    { name: 'Pakistan', code: '+92', countryCode: 'pk' },
    { name: 'Bangladesh', code: '+880', countryCode: 'bd' },
    { name: 'United Arab Emirates', code: '+971', countryCode: 'ae' },
    { name: 'Singapore', code: '+65', countryCode: 'sg' },
    { name: 'Thailand', code: '+66', countryCode: 'th' },
    { name: 'Vietnam', code: '+84', countryCode: 'vn' },
    { name: 'Indonesia', code: '+62', countryCode: 'id' },
    { name: 'Malaysia', code: '+60', countryCode: 'my' },
    { name: 'Philippines', code: '+63', countryCode: 'ph' },
    { name: 'Turkey', code: '+90', countryCode: 'tr' },
    { name: 'Greece', code: '+30', countryCode: 'gr' },
    { name: 'Poland', code: '+48', countryCode: 'pl' },
    { name: 'Czech Republic', code: '+420', countryCode: 'cz' },
    { name: 'Portugal', code: '+351', countryCode: 'pt' },
    { name: 'Belgium', code: '+32', countryCode: 'be' },
    { name: 'Austria', code: '+43', countryCode: 'at' },
    { name: 'Norway', code: '+47', countryCode: 'no' },
    { name: 'Denmark', code: '+45', countryCode: 'dk' },
    { name: 'New Zealand', code: '+64', countryCode: 'nz' },
    { name: 'South Africa', code: '+27', countryCode: 'za' },
    { name: 'Egypt', code: '+20', countryCode: 'eg' },
    { name: 'Nigeria', code: '+234', countryCode: 'ng' },
    { name: 'Israel', code: '+972', countryCode: 'il' },
    { name: 'Saudi Arabia', code: '+966', countryCode: 'sa' },
    { name: 'Argentina', code: '+54', countryCode: 'ar' },
    { name: 'Chile', code: '+56', countryCode: 'cl' },
    { name: 'Colombia', code: '+57', countryCode: 'co' },
    { name: 'Peru', code: '+51', countryCode: 'pe' },
    { name: 'Ireland', code: '+353', countryCode: 'ie' },
    { name: 'Finland', code: '+358', countryCode: 'fi' },
    { name: 'Hungary', code: '+36', countryCode: 'hu' },
    { name: 'Romania', code: '+40', countryCode: 'ro' }
  ];

  const images = [
    {
      id: 1,
      title: 'Technology Innovation',
      description: 'Cutting-edge technology and digital innovation driving the future forward with advanced solutions and smart systems.',
      src: '/123243.jpg'
    },
    {
      id: 2,
      title: 'Business Growth',
      description: 'Strategic business development and professional success through innovative approaches and digital transformation.',
      src: '/OIP.jpg'
    },
    {
      id: 3,
      title: 'Digital Transformation',
      description: 'Embracing modern technology to revolutionize business processes and create sustainable value in the digital age.',
      src: '/OIP (1).jpg'
    },
    {
      id: 4,
      title: 'Future Vision',
      description: 'Innovative solutions and creative strategies that shape tomorrow\'s business landscape and technological advancement.',
      src: '/OIP (2).jpg'
    }
  ];

  const selectedImage = images.find(img => img.id === selectedImageId);

  const getCountryFlag = () => {
    const country = countries.find(c => c.code === selectedCountry);
    return country ? country.countryCode : '';
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (userName.trim() && userNumber.trim() && selectedCountry) {
      if (userNumber.length !== 10 || isNaN(userNumber)) {
        alert('Please enter a valid 10-digit phone number');
        setUserNumber('');
      } else {
        setIsFormSubmitted(true);
      }
    } else {
      alert('Please select a country and enter both name and number');
    }
  };

  if (!isFormSubmitted) {
    return (
      <div className="app-container">
        <div className="form-container">
          <form onSubmit={handleFormSubmit} className="user-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name"
                className="form-input"
              />
            </div>
              <div className="form-group">
              <label htmlFor="number">Phone Number:</label>
              <div className="phone-input-group">
                <select
                  id="country"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="form-select-phone"
                  style={{backgroundImage: selectedCountry ? `url('https://flagcdn.com/w40/${getCountryFlag()}.png')` : 'none'}}
                >
                  <option value="">Select Country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country.code} data-country-code={country.countryCode}>
                      {country.name} {country.code}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  id="number"
                  value={userNumber}
                  onChange={(e) => setUserNumber(e.target.value)}
                  placeholder="Enter your phone number"
                  className="form-input"
                />
              </div>
            </div>
            <button type="submit" className="btn submit-btn">Proceed</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="card">
        <h1>Image Gallery</h1>
        <div className="images-grid">
          {images.map((image) => (
            <div key={image.id} className="image-item">
              <img
                src={image.src}
                alt={image.title}
                className="gallery-image"
                onClick={() => setSelectedImageId(image.id)}
              />
              <p className="image-title">{image.title}</p>
            </div>
          ))}
        </div>
        {selectedImage && (
          <div className="description-box">
            <h2>{selectedImage.title}</h2>
            <p>{selectedImage.description}</p>
            <button onClick={() => setSelectedImageId(null)} className="btn close-btn">Close</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;