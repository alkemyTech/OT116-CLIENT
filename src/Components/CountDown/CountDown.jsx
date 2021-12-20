import React, { useEffect, useState } from 'react';
import './countDown.css';

const CountDown = ({ eventDate, isDinamic }) => {
  const [activeCounter, setActiveCounter] = useState(true);
  const [now, setNow] = useState(new Date());
  const [countDown, setCountDown] = useState();

  const getDiff = (date1, date2) => {
    let diff = (date2 - date1) / 1000;// Obtener los segundos entre fechas
    diff = Math.abs(Math.floor(diff));

    const days = Math.floor(diff / (24 * 60 * 60));// 24 * 60 * 60 = segundos en 24hs
    let leftSec = diff - days * 24 * 60 * 60;// segundos restantes

    const hrs = Math.floor(leftSec / (60 * 60));
    leftSec -= hrs * 60 * 60;

    const min = Math.floor(leftSec / (60));
    leftSec -= min * 60;

    return {
      days, hours: hrs, min, sec: leftSec,
    };
  };

  useEffect(() => {
    if (now > eventDate) {
      setActiveCounter(false);
    } else {
      setCountDown(getDiff(eventDate, now));
      if (isDinamic) {
        setTimeout(() => {
          setNow(new Date());
        }, 60000);
      }
    }
  }, [now]);

  return (
    <div className="countDown">
      { activeCounter
        ? (
          <h3 className="fw-bolder">
            Te quedan
            <span>
              {' '}
              {countDown && countDown.days}
              {' '}
              {countDown && countDown.days !== 1 ? 'días' : 'día'}
            </span>
            <span>
              {' '}
              {countDown && countDown.hours}
              {' '}
              {countDown && countDown.hours !== 1 ? 'horas' : 'hora'}
            </span>
            <span>
              {' '}
              {countDown && countDown.min}
              {' '}
              {countDown && countDown.min !== 1 ? 'minutos' : 'minutos'}
              {' '}
            </span>
            para participar
          </h3>
        ) : (
          <div>El evento ha finalizado</div>
        )}
    </div>
  );
};

export default CountDown;
