import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <header className='header'>
        <h1>Welcome to Mojo Travel</h1>
        <p>Your adventure starts here!</p>
        <button className='book-now'>Book Now</button>
      </header>
      <section className='features'>
        <h2>Popular Destinations</h2>
        <div className='destination-cards'>
          <div className='card'>
            <h3>Paris</h3>
            <p>Explore the city of lights.</p>
          </div>
          <div className='card'>
            <h3>New York</h3>
            <p>The city that never sleeps.</p>
          </div>
          <div className='card'>
            <h3>Bali</h3>
            <p>A tropical paradise awaits.</p>
          </div>
        </div>
      </section>
      <footer className='footer'>
        <p>© 2023 Mojo Travel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;