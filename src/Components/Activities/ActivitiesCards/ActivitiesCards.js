import { NO_ACTIVITIES } from "../../common/text/textActivity";
import { setCKEditorText } from "../../common/ckEditor/setCKEditorText";
import * as activityService from "../../../Services/activityService";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CustomCard from "../../Card/CustomCard";

const ActivitiesCards = ({ activities }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 1,
        mb: 7,
        mt: 9,
      }}
    >
      <Grid container sx={{ m: 3 }}>
        {activityService.isValidList(activities) ? (
          activities.map((card) => (
            <Grid xs={4}>
              <CustomCard
                route={`/activity-detail/${card.id}`}
                title={card.name}
                img={card.image}
                description={card.description && setCKEditorText(card, "description")}
              />
            </Grid>
          ))
        ) : (
          <p>{NO_ACTIVITIES}</p>
        )}
      </Grid>
    </Container>
  );
};

export default ActivitiesCards;
