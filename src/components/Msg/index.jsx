import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';


const propTypes = {
  title: PropTypes.string.isRequired,
  sendby: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

// Class that receive the data from the incoming message and then, display them
// as a new component
const Msg = props => (
  <div className={styles.root}>
    {/* The data that the component receive, is handled through proptypes */}
    <input type="radio" id="radioButton" className={styles.checkbutton} />
    <div className={styles.infoncontent}>
      <div className={styles.headermsg}>
        <span className={styles.title}>{props.title}</span>
        <span className={styles.date}>{props.date}</span>
      </div>
      <div className={styles.bodymsg}>
        <span className={styles.sendby}>{props.sendby}</span>
        <span className={styles.contentmsg}>{props.content}</span>
      </div>
    </div>

  </div>
);


Msg.propTypes = propTypes;
export default Msg;
