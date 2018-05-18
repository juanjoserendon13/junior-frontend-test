import React from 'react';
import styles from './styles.css';

const Tools = () => (
  <div className={styles.root}>

    <div className={styles.inputWithIcon}>
      <input type="text" placeholder="Buscar mensajes" />
      <i className="fas fa-search" aria-hidden="true" />
    </div>
    <div className={styles.feedback}>
      <span className={styles.textfeedback}>Mis mensajes / <b>Recibidos</b></span>
      <div className={styles.pagination}>
        <span className={styles.textpage}>1-25 de 43</span>
        <button className={styles.arrowpage}><i className="fas fa-angle-left" aria-hidden="true" /></button>
        <button className={styles.arrowpage}><i className="fas fa-angle-right" aria-hidden="true" /></button>
      </div>
    </div>

  </div>
);

export default Tools;
