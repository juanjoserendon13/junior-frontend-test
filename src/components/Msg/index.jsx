import React from 'react';

import styles from './styles.css';


const Msg = () => (
  <div className={styles.root}>
    <input type="radio" id="radioButton" className={styles.checkbutton} />
    <div className={styles.infoncontent}>
      <div className={styles.headermsg}>
        <span>Titulo del mensaje</span>
        <span>Fecha</span>
      </div>
      <span>Titulo del mensaje</span>
      <span>Enviado por</span>
      <span>Contenido de previsualización del mensaje </span>
    </div>

  </div>
);

export default Msg;
