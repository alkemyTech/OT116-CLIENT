import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import LogoONG from '../../Assets/Logo/logo.png';

const CampaignFooter = () => (
  <footer>
    <img className="logo" src={LogoONG} alt="ONG Logo" />

    <div className="socials">
      <ul>
        <li>
          <a
            href="https://www.instagram.com/SomosMás"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
            <span className="socials__text">instagram.com/SomosMás</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/SomosMás"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
            <span className="socials__text">facebook.com.ar/SomosMás</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:somosfundacionmas@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MailIcon />
            <span className="socials__text">somosfundacionmas@gmail.com</span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default CampaignFooter;
