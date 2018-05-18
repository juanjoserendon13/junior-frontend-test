import React from 'react';
import styles from './styles.css';

// This is the left bar, that handle the main navigation
// Of the app
const Aside = () => (
  <div className={styles.root}>
    <div className={styles.btninfo}>
      <span className={styles.textbtninfo}>Mis mensajes</span>
      <i className="fas fa-angle-down" />
    </div>

    {/* Button handling the creation of new messages */}
    <button className={styles.btnnew}> <i className="fas fa-pencil-alt fa-fw" /> Nuevo mensaje</button>
    <div className={styles.contmessagetype}>
      {/* List handling the navigation between the possible states of the inbox */}
      <ul className={styles.typemessage}>
        <li id="link1"><a href="#link1" id="link1" className={styles.link}>Recibidos</a></li>
        <li id="link2"><a href="#link2" id="link2" className={styles.link}>Enviados</a></li>
        <li id="link3"><a href="#link3" id="link3" className={styles.link}>Archivados</a></li>
        <li id="link4"><a href="#link4" id="link4" className={styles.link}><b>Auditar</b></a></li>
      </ul>
    </div>

  </div>
);

export default Aside;
