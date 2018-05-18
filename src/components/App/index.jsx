import React from 'react';
import 'normalize-css';

import styles from './styles.css';
import Messages from './../Messages';
import Aside from './../Aside';
import Tools from './../Tools';
import ViewMsg from './../ViewMsg';

const App = () => (
  <div className={styles.root}>
    <Aside className={styles.aside} />
    <div className={styles.card}>
      <Tools className={styles.tools} />
      <div className={styles.contentview}>
        <Messages />
        <ViewMsg />
        <div />
      </div>
    </div>
  </div>
);

export default App;
