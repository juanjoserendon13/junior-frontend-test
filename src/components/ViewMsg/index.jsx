import React from 'react';

import styles from './styles.css';

// This component allows display the whole message that the
// user select in the inbox.
const ViewMsg = () => (
  <div className={styles.root}>
    <div className={styles.feedbackview}> <span className={styles.emptystate}>Slecciona un mensaje para leerlo</span>
      <span className={styles.instruction}>Haz clic aquí para seleccionar el primer elemento de la lista</span>
    </div>

  </div>
);

export default ViewMsg;
