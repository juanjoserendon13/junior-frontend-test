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
class Msg extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className={styles.root}>
        {/* The data that the component receive, is handled through proptypes */}
        <input type="radio" id="radioButton" className={styles.checkbutton} />
        <div className={styles.infoncontent}>
          <div className={styles.headermsg}>
            <span className={styles.title}>{this.props.title}</span>
            <span className={styles.date}>{this.props.date}</span>
          </div>
          <span className={styles.sendby}>{this.props.sendby}</span>
          <span className={styles.contentmsg}>{this.props.content}</span>
        </div>
      </div>
    );
  }
}

Msg.propTypes = propTypes;
export default Msg;
