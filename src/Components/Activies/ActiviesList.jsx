import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as getActivities from '../../app/activitiesReducer/activitiesActions';
import './ActiviesList.css';

const ActivitiesList = () => {
  const { activities } = useSelector((state) => state.activities);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActivities.getActivities());
  }, []);

  return (
    <div>
      <div className="list">
        <h1>Listado de Testimonios</h1>
      </div>
      <ul className="list-container">
        {activities && activities.length > 0
          ? activities.map((activity) => (
            <li className="card-info" key={activity.id} activity={activity}>
              <h3>{activity.name}</h3>
              <h4>{activity.description}</h4>
            </li>
          ))
          : null}
      </ul>
    </div>
  );
};

export default ActivitiesList;
