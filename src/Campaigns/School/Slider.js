import React from "react";
import kid from "../../Assets/Photos/kid1.jpg";
import team from "../../Assets/Photos/team.jpg";
import work from "../../Assets/Photos/work.jpg";
import CarouselCampaign from "../CarouselCampaign/CarouselCampaign";

const Slider = () => {
  const slidesImg = [
    {
      img: kid,
      title: "Kid",
    },
    {
      img: team,
      title: "Team",
    },
    {
      img: work,
      title: "Work",
    },
  ];
  return (
    <div>
      <CarouselCampaign values={slidesImg} />
    </div>
  );
};

export default Slider;
