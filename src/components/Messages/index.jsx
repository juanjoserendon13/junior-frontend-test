import React, { Component } from 'react';
import styles from './styles.css';
import Msg from './../Msg';

class Messages extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  // This method, simulated the fetching of the data from the server.
  componentDidMount() {
    const data = {
      inbox: [{
        id: 1,
        subject: 'Im opting',
        messageText: 'Some text',
        createdAt: '2018-05-16',
        userId: 1,
      }],
      outbox: [],
      archived: [],
      users: [{
        id: 1,
        fullname: 'Jhon Doe',
      }],
    };
    console.log('datos:', data);

    this.setState({ data });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.root}>
        <div className={styles.btntop}>

          <div className={styles.container}>
            <div className={styles.checkcont}><input type="radio" id="radioButton" className={styles.checkbutton} /><b>Titulo</b></div>

            <div className={styles.btninfo}>
              <span className={styles.textbtninfo}>Ver todos</span>
              <i className="fas fa-angle-down" />
            </div>

          </div>
        </div>

        <div className={styles.containerMsgs}>
          <Msg />
        </div>

      </div>
    );
  }
}

export default Messages;
