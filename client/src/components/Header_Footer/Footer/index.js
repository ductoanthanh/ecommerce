import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';

const Footer = ({data}) => {
  return (
    data.siteData ?
    <footer className="row">
      <div className="col-md-12">

        <div className="wrapper row">
          <div className="col-md-2">
            <div className="logo">VIBE</div>
            <p style={{textAlign: 'center'}}>© 2018 Copyright Vibe Inc. All Right Reserved.</p>
          </div>
          <div className="col-md-4">
            <h2>Vibe With Us</h2>
            <div className="business_nfo">
              <div className="tag">
                <FontAwesomeIcon
                  icon={faCompass}
                  className="icon"
                />
                <div className="nfo">
                  <div>Address</div>
                  <div>{data.siteData[0].address}</div>
                </div>
              </div>
              <div className="tag">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="icon"
                />
                <div className="nfo">
                  <div>Phone</div>
                  <div>{data.siteData[0].phone}</div>
                </div>
              </div>
              <div className="tag">
                <FontAwesomeIcon
                  icon={faClock}
                  className="icon"
                />
                <div className="nfo">
                  <div>Support Hours</div>
                  <div>{data.siteData[0].hours}</div>
                </div>
              </div>
              <div className="tag">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="icon"
                />
                <div className="nfo">
                  <div>Email</div>
                  <div>{data.siteData[0].email}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h2>Information</h2>
            <div className="links_nfo">
              <div className="tag">
                <a href="">Privacy</a>
              </div>
              <div className="tag">
                <a href="">Blog</a>
              </div>
              <div className="tag">
                <a href="">Return</a>
              </div>
              <div className="tag">
                <a href="">About Us</a>
              </div>
              <div className="tag">
                <a href="">FAQ</a>
              </div>
              <div className="tag">
                <a href="">Contact Us</a>
              </div>
            </div>

          </div>
          <div className="col-md-3">
            <h2>Subscribe</h2>
            <div>
              <div>
                Sign up to get the latest on promotions, new releases and more…
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    : null
  )
}

export default Footer;
