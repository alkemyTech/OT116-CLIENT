import React from 'react';
import CountDown from '../CountDown/CountDown';
import './campaignContent.css';

const Content = ({ content }) => {
  const {
    name,
    date,
    time,
    address,
    description,
    image1,
    image2,
    image3,
    image4,
    image5,
  } = content;

  // Address received as "calle 123, Localidad, Provincia"
  // Format of date variable prop from input type="date" (received as "YYYY-MM-DD")
  const year = date.slice(0, -6);
  const month = date.slice(5, -3) - 1;
  const day = date.slice(-2);

  // Format of time variable prop from input type="time" (received as "HH:MM")
  const hour = time.slice(0, -3);
  const min = time.slice(-2);

  // Convert date to javascript Date constructor format
  const eventDate = new Date(year, month, day, hour, min, 0);

  return (
    <section className="landingContent">
      <div className="landingContent--display">
        <h2>{`${day}-${month + 1}-${year}, ${hour}:${min} hs, ${address}`}</h2>
        <CountDown eventDate={eventDate} isDinamic={false} />
        <p>{description}</p>
      </div>
      <div className="landingContent--images sideImages">
        <img src={image1} alt={name} />
        <img src={image2} alt={name} />
      </div>
      <div className="landingContent--images bottomImages">
        <img src={image3} alt={name} />
        <img src={image4} alt={name} />
        <img src={image5} alt={name} />
      </div>
    </section>
  );
};

export default Content;
