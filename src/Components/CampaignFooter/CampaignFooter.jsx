import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import LogoONG from '../../Assets/Logo/logo.png';
import './CampaignFooter.css';

const isEmpty = (object) => Object.keys(object).length === 0;

const CampaignFooter = ({ campaignsList = [] }) => {
  const isCampaignListNotEmpty = campaignsList?.length > 0;
  const isCampaignListValid = campaignsList?.every((camp) => !isEmpty(camp));

  return (
    <footer>
      <div className="ong">
        <Link to="/">
          <img className="logo" src={LogoONG} alt="ONG Logo" />
        </Link>

        <Link className="ong_name" to="/">
          Somos Más
        </Link>
      </div>

      <ul className="socials__list">
        <li>
          <a
            href="https://www.instagram.com/SomosMás"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon sx={{ fontSize: 35 }} />
            <span className="socials__text">instagram.com/SomosMás</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/SomosMás"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon sx={{ fontSize: 35 }} />
            <span className="socials__text">facebook.com.ar/SomosMás</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:somosfundacionmas@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MailIcon sx={{ fontSize: 35 }} />
            <span className="socials__text">somosfundacionmas@gmail.com</span>
          </a>
        </li>
      </ul>

      <div className="campaigns">
        <h2>Campañas:</h2>

        {isCampaignListNotEmpty && isCampaignListValid ? (
          <ul className="campaigns__list">
            {campaignsList?.map(({ name, url }) => (
              <li key={name}>
                <Link to={url}>{name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <h3>No hay más Campañas</h3>
        )}
      </div>
    </footer>
  );
};

export default CampaignFooter;
