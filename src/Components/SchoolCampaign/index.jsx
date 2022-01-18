import React from 'react';
import CampaignHeader from '../CampaignHeader/CampaignHeader';
import CampLogo from '../../Assets/SchoolCampaign/Logotipo campaña materiales escolares.png';
import CampaignFooter from '../CampaignFooter/CampaignFooter';
import { schoolCampaignConfig } from '../CampaignContent/campaignConfig';
import { configSliderEscolar as config } from '../../constants/configSliders';
import Content from '../CampaignContent/Content';
import Slider from '../Slider/Slider';
import { arraySlidesEscolar as slidesEscolar } from '../../constants/arraySliders';

const SchoolCampaign = () => (
  <div>
    <CampaignHeader
      slogan="Juntos por la vuelta al Cole"
      campaignLogo={CampLogo}
    />
    <Slider arraySlides={slidesEscolar} config={config} />
    <Content content={schoolCampaignConfig} />
    <CampaignFooter campaignsList={[{ name: 'Campaña de Juguetes', url: '/toys-campaign' }, { name: 'Campaña de Escolar', url: '/school-campaign' }]} />
  </div>
);

export default SchoolCampaign;
