import React from 'react';
import styles from './styles.css';
import Messages from './../Messages';
import Aside from './../Aside';
import 'normalize-css';
import Tools from './../Tools';

const App = () => (
  <div className={styles.root}>
    <Aside className={styles.aside} />
    <div className={styles.card}>
      <Tools className={styles.tools} />
      <div className={styles.viewmsg} />
    </div>
  </div>
);

export default App;
