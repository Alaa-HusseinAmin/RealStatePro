import React, { Fragment } from 'react'
import "../CSS/Footer.css"

const Footer = () => {
  return (
    <Fragment>
    <section className="footer">

    <div className="footer-container">
    <div className="footer-row">

    {/* column-1 */}

    <div className="footer-column">
        <div className="column-content">
        <h2>Downtown</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, blanditiis.</p>
        <ul className="footer-link">
           <li> <a href="#"><i className="fa-brands fa-facebook-f"></i></a> </li>
           <li> <a href="#"><i className="fa-brands fa-twitter"></i></a> </li>
           <li> <a href="#"> <i className="fa-brands fa-instagram"></i> </a> </li>
        </ul>
        </div>
    </div>

    {/* column-2 */}

    <div className="footer-column">
        <div className="column-content">
        <h2>Community</h2>
        <ul>
           <li> 
              <a href="#">
                <span> <i className="fa-solid fa-arrow-right-long"></i> </span>
                Search Properties
              </a>
            </li>
           <li> 
              <a href="#">
                <span> <i className="fa-solid fa-arrow-right-long"></i> </span>
                For Agents
              </a>
            </li>
           <li>
              <a href="#">
                <span> <i className="fa-solid fa-arrow-right-long"></i> </span>
                Reviews
              </a>
            </li>
        </ul>
        </div>
    </div>

    {/* column-3 */}

    <div className="footer-column">
        <div className="column-content">
        <h2>About Us</h2>
        <ul>
           <li> 
              <a href="#">
                <span> <i className="fa-solid fa-arrow-right-long"></i> </span>
                Our Story
              </a>
            </li>
           <li> 
              <a href="#">
                <span> <i className="fa-solid fa-arrow-right-long"></i> </span>
                Meet the team
              </a>
            </li>
           <li>
              <a href="#">
                <span> <i className="fa-solid fa-arrow-right-long"></i> </span>
                Reviews
              </a>
            </li>
        </ul>
        </div>
    </div>

    {/* column-4 */}

    <div className="footer-column">
        <div className="column-content">
        <h2>Companny</h2>
        <ul>
           <li> 
              <a href="#">
                <span> <i className="fa-solid fa-arrow-right-long"></i> </span>
                About Us 
              </a>
            </li>
           <li> 
              <a href="#">
                <span> <i className="fa-solid fa-arrow-right-long"></i> </span>
                Press
              </a>
            </li>
           <li>
              <a href="#">
                <span> <i className="fa-solid fa-arrow-right-long"></i> </span>
                Contact
              </a>
            </li>
            <li>
              <a href="#">
                <span> <i className="fa-solid fa-arrow-right-long"></i> </span>
                Careers
              </a>
            </li>
        </ul>
        </div>
    </div>

    {/* Column-5 */}

    <div className="footer-column">
        <div className="column-content">
        <h2>Have a Questions?</h2>
        <ul>
           <li> 
                <span className='footer-icon'> <i className="fa-solid fa-location-dot"></i> </span>
                <span className="text">Golf ST. Lake View, San Francisco, California, USA</span>
            </li>
           <li> 
                <span className='footer-icon'> <i className="fa-solid fa-phone"></i> </span>
                <span className="text">+2 292 2088 234</span>
            </li>
           <li>
                <span className='footer-icon'> <i className="fa-solid fa-envelope"></i> </span>
                <span className="text">info@yourdomain.com</span>
            </li>
        </ul>
        </div>
    </div>

    </div>

    <div className="footer-2">
        <div className="footer-2-container">
        <p>Copyright ©2022 All rights reserved LearnDev</p>
        </div>
    </div>

    </div>

    </section>

    </Fragment>
  )
}

export default Footer