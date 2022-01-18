import React from 'react';
import CampaignFooter from '../CampaignFooter/CampaignFooter';
import CampaignHeader from '../CampaignHeader/CampaignHeader';
import Slider from '../Slider/Slider';
import CampLogo from '../../Assets/ToysCampaign/Logotipo campaña juguetes.png';
import Content from '../CampaignContent/Content';
import { toysCampaignConfig } from '../CampaignContent/campaignConfig';
import { configSliderEscolar as config } from '../../constants/configSliders';
import arraySlidesJuguetes from '../../constants/arraySliders';

const ToysCampaign = () => (
  <div style={{ minHeight: '100%' }}>
    <CampaignHeader
      slogan="Juguetes por más Sonrisas"
      campaignLogo={CampLogo}
    />
    <Slider config={config} arraySlides={arraySlidesJuguetes} />
    <Content content={toysCampaignConfig} />
    <CampaignFooter campaignsList={[{ name: 'Campaña de Juguetes', url: '/toys-campaign' }, { name: 'Campaña de Escolar', url: '/school-campaign' }]} />

  </div>
);

export default ToysCampaign;
