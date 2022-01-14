import React from 'react';
import { Link } from 'react-router-dom';
import ONGLogo from '../../Assets/Logo/logo.png';
import './CampaignHeader.css';

const CampaignHeader = ({ campaignLogo, slogan }) => (
  <header role="menu">
    <img className="campaign_logo" src={campaignLogo} alt="campaignLogo" />
    <h3 className="campaign_slogan">{slogan}</h3>
    <Link to="/"><img className="ong_logo" src={ONGLogo} alt="ONG Logo" /></Link>
  </header>
);
export default CampaignHeader;
