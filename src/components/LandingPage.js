import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="landing-page">
            <Header />
            <main>
                <section className="hero">
                    <h2>Explore the World with Mojo Travel</h2>
                    <button className="cta">Book Your Adventure</button>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default LandingPage;