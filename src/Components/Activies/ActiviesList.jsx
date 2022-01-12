import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as getAllActivities from '../../app/activitiesReducer/activitiesActions';
import './ActiviesList.css';
import ErrorAlert from '../Alerts/ErrorAlert';

const ActivitiesList = () => {
  const { activities } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllActivities()).catch(() => {
      ErrorAlert('No hay actividades disponibles');
    });
  }, []);

  return (
    <div>
      <div className="list">
        <h1>Listado de Testimonios</h1>
      </div>
      <ul className="list-container">
        {activities.length
          ? activities.map((activity) => (
            <li className="card-info" key={activity.id} activity={activity}>
              <p>{activity.description}</p>
            </li>
          ))
          : null}
      </ul>
    </div>
  );
};

export default ActivitiesList;
