import React from 'react';
import './ActiviesList.css';

const ActivitiesList = () => {
  const activities = [
    { id: 1, description: 'Testimonials1' },
    { id: 2, description: 'Testimonials2' },
    { id: 3, description: 'Testimonials3' },
    { id: 4, description: 'Testimonials4' },
    { id: 5, description: 'Testimonials5' },
    { id: 6, description: 'Testimonials6' },
  ];
  return (
    <div>
      <div className="list">
        <h1>Listado de Testimonios</h1>
      </div>
      <ul className="list-container">
        {activities && activities.length > 0
          ? activities.map((activity) => (
            <li className="card-info" key={activity.id}>
              <p>{activity.description}</p>
            </li>
          ))
          : <p>No hay testimonios para mostrar</p>}
      </ul>
    </div>
  );
};

export default ActivitiesList;
