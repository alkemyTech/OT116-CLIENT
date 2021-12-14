import React from "react";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { setCKEditorText } from "../../Components/common/ckEditor/setCKEditorText";
import CustomCard from "../Card/CustomCard";
import { Grid } from "@mui/material";
const AboutUsMembersItem = ({ member }) => {
  return (
    <Grid xs={4}>
      <CustomCard
       className="CardTransition"
        sx={{ fontSize: 40, textDecoration: "none", color:"#8dcaff"}}
        title={member.name}
        img={member.image}
        description={
          member.description && setCKEditorText(member, "description")
        }
        firstSocialLink={member.facebookUrl}
        firstSocialLinkName="Facebook"
        secondSocialLink={member.linkedinUrl}
        secondSocialLinkName="Linkedin"
      />
    </Grid>
  );
};

export default AboutUsMembersItem;
