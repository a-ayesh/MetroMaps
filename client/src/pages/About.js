import React from 'react';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div id="root">
          <header id="style-two">
            <h1>About Us</h1>
            <p>Our Metrobus Tracking Service is a revolutionary platform designed to streamline the commuting experience for passengers across Pakistan's cities. With a focus on convenience and real-time information, our service aims to offer a hassle-free way for regular passengers to navigate and track their journey within the extensive metrobus networks.</p>
          </header>
          <section id="feature">
            <h1>Features</h1>
            <div className="feature-container">
                <div className="feature">
                    <div className="text-content">
                    <h3>Live Journey Tracking</h3>
                    <p>Track your metrobus in real-time, getting live updates on its location and estimated arrival times at stops.</p>
                    </div>
                    <img src="images/live.png" alt="Live Tracking"/>
                </div>
                <div className="feature">
                    <div className="text-content">
                    <h3>City-wise Metrobus Maps</h3>
                    <p>Access comprehensive maps of metrobus routes across various cities in Pakistan for better route visualization.</p>
                    </div>
                    <img src="images/city.png" alt="Metrobus Maps" />
                </div>
                <div className="feature">
                    <div className="text-content">
                    <h3>Next Stop Information</h3>
                    <p>Get accurate details about the next stop to plan your commute more efficiently and comfortably.</p>
                    </div>
                    <img src="images/map.png" alt="Next Stop Information" />
                </div>
            </div>
          </section>
          <div id="style-two">
            <section>
              <h2>Our Mission</h2>
              <p>Our service aims to bridge the gap between passengers and public transportation by leveraging technology. By offering live tracking and detailed metrobus maps, we empower our commuters to make informed decisions, reduce wait times, and navigate the metrobus network with ease.</p>
            </section>
          </div>
          <div id="style-two">
            <section>
              <h2>Our Team</h2>
              <div className="team-members">
                {/* Display team member details */}
                <div className="team-member">
                  <h3>Ayesh Ahmad</h3>
                  <p>MERN Stack Developer</p>
                </div>
                <div className="team-member">
                  <h3>Muhammad Bin Usman</h3>
                  <p>MERN Stack Developer</p>
                </div>
              </div>
            </section>
          </div>
          <footer id='feature'>
            <center>
                <h4>For further information.</h4>
                <Link to='/contact'>
                <Button variant="success" size="md">Contact Us</Button>
                </Link>
            </center>

          </footer>
        </div>
      );
};

export default AboutUs;
