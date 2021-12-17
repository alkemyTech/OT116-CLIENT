import React from 'react';
import ONGLogo from '../../Assets/Logo/logo.png';
import './CampaignHeader.css';

const CampaignHeader = ({ campaignLogo, slogan }) => (
  <header role="menu">
    <img className="campaign_logo" src={campaignLogo} alt="campaignLogo" />
    <h1 className="campaign_slogan">{slogan}</h1>
    <img className="ong_logo" src={ONGLogo} alt="ONG Logo" />
  </header>
);
export default CampaignHeader;
