import React, { useState } from 'react';
import './Profile.css'; // CSS file for styling
import heart from './assets/heart.svg'
import eye from './assets/eye.svg'
import tag from './assets/tag.svg'
import link from './assets/link.svg'
import play from './assets/play.svg'
import download from './assets/download.svg'
import avatar1 from './assets/avatar.png'
import message from './assets/message.svg'
import downloadPng from './assets/download.png'
import avatar2 from './assets/avatar2.png'
import avatar3 from './assets/avatar3.png'

const Profile = () => {

  return (
    <div className="main-container">
      <div className="profile-section">
        <div className='icons'>
          <div>
            <img src={heart} alt='icon'/>
          </div>
          <div>
            <img src={eye} alt='icon'/>
          </div>
          <div>
            <img src={tag} alt='icon'/>
          </div>
          <div>
            <img src={link} alt='icon'/>
          </div>
          <div>
            <img src={play} alt='icon'/>
          </div>
          <div>
            <img src={download} alt='icon'/>
          </div>
        </div>
        <div className='profileDiv'>
          <img src={avatar1} alt="Meagan Fisher" className="avatar" />
          <h3>Meagan Fisher</h3>
          <p>Engineering Manager</p>
          <div className="buttons">
            <button className="follow-button">Follow +</button>
            <button className="message-button">
              Message
              <img src={message} alt="Message Icon" className="message-icon" />
            </button>
          </div>
        </div>
      </div>

      <div className='secondDiv'>
        <div className="image-section">
          <img src={downloadPng} alt="Scenic view" className="scenic-image" />
          <div>
            <img src={avatar2} className='avt2' alt='avt2'/>
            <p>Meagan Fisher</p>
              <img src={heart} alt="Heart Icon" className="heart-icon" />
          </div>
        </div>
        <div className='lower-section'>
        <img src={avatar3} className='avt3' alt='avt3'/>
            <p className='p1'>John Doe <br/> <p >UI/UX Designer</p></p> 

            <img src={tag} alt="Heart Icon" className="heart-icon" />
        </div>
      </div>

      <div className="login-section">
        {/* Login Section Content */}
        <h5>Login into your account</h5>
        <p>Don't have an account yet? <a href="/signup">Create New</a></p>
        <form>
          <div className="input-group">
            <input type="email" placeholder="johndoe@gmail.com" />
            <span className="email-icon">📧</span>
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" />
            <span className="password-icon">👁️</span>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
