import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
/* import Title from "../../Title/Title"; */
import { getById } from "../../../app/activitiesReducer/activitiesReducer";
import { useSelector } from "react-redux";
import "../../../Styles/CardStyle.css";
import { useDispatch } from "react-redux";
import LoadingSpinner from "../../../Utils/loadingSpinner";

const Title = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../../Title/Title")), 600)
    )
);

const Detail = () => {
  const { id } = useParams();
  const activity = useSelector((state) => state.activities.activity);
  const [activityDescription, setActivityDescription] = useState("");
  const [loading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const stripedHtml = useCallback(() => {
    activity.description &&
      setActivityDescription(activity.description.replace(/<[^>]+>/g, ""));
  }, [activity.description]);

  useEffect(() => {
    dispatch(getById(id));
    stripedHtml();
    setIsLoading(false);
  }, [stripedHtml]);

  return (
    <div>
      {loading ? (
        <div className="spinner">
          <LoadingSpinner />
        </div>
      ) : (
        <div>
          <Card className="cardStyle">
            <CardActionArea>
              <CardMedia>
                <Suspense fallback={<LoadingSpinner />}>
                  <Title
                    title={activity.name}
                    image={activity.image}
                    key={activity.id}
                  />
                </Suspense>
              </CardMedia>
              <CardContent>
                <Typography>{activityDescription}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Detail;
