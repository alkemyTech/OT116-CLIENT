import React from 'react';
import { alertConfirm, alertInfo } from './alerts';

const TestAlert = function () {
  const alertData = {
    title: 'Esta seguro de realizar esta acción?',
    text: 'Detalles sobre las consecuencias',
  };

  return (
    <div>
      <button type="button" onClick={() => alertInfo('Error', 'Detalle del error', 'error')}>DEMO ALERTA DE ERROR</button>
      <button type="button" onClick={() => alertInfo('Atención', 'Detalle para ayudar al usuario', 'info')}>DEMO ALERTA DE INFORMACION</button>
      <button type="button" onClick={() => alertConfirm(alertData.title, alertData.text)}>DEMO ALERT CONFIRMAR ACCION</button>
    </div>
  );
};

export default TestAlert;
