import React from 'react';
import CampaignHeader from '../CampaignHeader/CampaignHeader';
import CampLogo from '../../Assets/SchoolCampaign/Logotipo campaña materiales escolares.png';
import CampaignFooter from '../CampaignFooter/CampaignFooter';

const SchoolCampaign = () => (
  <div>
    <CampaignHeader
      slogan="Juntos por la vuelta al Cole"
      campaignLogo={CampLogo}
    />
    <CampaignFooter campaignsList={[{ name: 'Campaña de Juguetes', url: '/toys-campaign' }, { name: 'Campaña de Escolar', url: '/school-campaign' }]} />
  </div>
);

export default SchoolCampaign;
