import React, { useEffect, useState } from "react";
import "../../../Styles/CardStyle.css";
import { listHasValues } from "../../../Utils/validation";
import Title from "../../Title/Title";
import CustomCard from "../../Card/CustomCard";
import { Container } from "@mui/material";
import VideoCard from "../../Card/VideoCard";
import { videoLastEvent } from "./videoEvent";
import CardSection from "../../Home/CardsSection";
import { getAll } from "../../../Services/newsServices";
import novedades from "../../../Assets/TitleImages/novedades.jpg";

const NewsList = () => {
  return (
    <div>
      <Title title="Novedades" image={novedades} />
      <CardSection getInformation={getAll} clickeable={{to:'/novedades'}} />
      <VideoCard
        title={videoLastEvent.name}
        video={videoLastEvent.video}
        description={videoLastEvent.content}
      />
    </div>
  );
};

export default NewsList;
