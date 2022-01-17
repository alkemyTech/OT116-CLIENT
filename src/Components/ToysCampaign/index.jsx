import React from 'react';
import CampaignFooter from '../CampaignFooter/CampaignFooter';
import CampaignHeader from '../CampaignHeader/CampaignHeader';
import CampLogo from '../../Assets/ToysCampaign/Logotipo campaña juguetes.png';

const ToysCampaign = () => (
  <div>
    <CampaignHeader
      slogan="Juntos por la vuelta al Cole"
      campaignLogo={CampLogo}
    />
    <CampaignFooter campaignsList={[{ name: 'Campaña de Juguetes', url: '/toys-campaign' }, { name: 'Campaña de Escolar', url: '/school-campaign' }]} />

  </div>
);

export default ToysCampaign;
