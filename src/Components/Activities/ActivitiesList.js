import "../CardListStyles.css";
import Title from "../Title/Title";
import { useEffect, useState } from "react";
import { ACTIVITIES } from "../common/text/textActivity";
import ActivitiesCards from "./ActivitiesCards/ActivitiesCards";
import ListPagination from "../common/ListPagination/ListPagination";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../app/activitiesReducer/activitiesReducer";
import actividades from "../../Assets/TitleImages/actividades.jpg";
const ActivitiesList = () => {
  const { activities: items } = useSelector((state) => state.activities);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, []);

  const showItemsListComponent = (items) => (
    <ActivitiesCards activities={items} />
  );

  return (
    <div>
      <Title title={ACTIVITIES} id={"activitiesList"} image={actividades} />
      <ListPagination
        items={items}
        showItemsListComponent={showItemsListComponent}
      />
    </div>
  );
};

export default ActivitiesList;
