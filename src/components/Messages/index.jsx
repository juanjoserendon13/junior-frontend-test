import React, { Component } from 'react';
import styles from './styles.css';
import Msg from './../Msg';
// This is the class that process and fetch the data in the inbox
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
        subject: 'This is a title',
        messageText: 'Some text Demasiado textoSome text Demasiado textoSome text Demasiado textoSome text Demasiado textoSome text Demasiado textoSome text Demasiado textoSome text Demasiado texto',
        createdAt: '2018-05-16',
        userId: 1,
      },
      {
        id: 2,
        subject: 'This another title',
        messageText: 'Another text, testing the map',
        createdAt: '2018-05-18',
        userId: 1,
      },
      ],
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
        {/* Section that manages the sort  of the messages */}
        <div className={styles.btntop}>

          <div className={styles.container}>
            <div className={styles.checkcont}><input type="radio" id="radioButton" className={styles.checkbutton} /><b>Todos</b></div>

            <div className={styles.btninfo}>
              <span className={styles.textbtninfo}>Ver todos</span>
              <i className="fas fa-angle-down" />
            </div>

          </div>
        </div>
        {/* Container handling the messages availables */}
        <div className={styles.containerMsgs}>
          {/* ISSUE with the map that render the messages depending of the data fetched */}

          {/* data.inbox && this.state.data.inbox.map(msg => (
            <Msg
              title={data.inbox && msg.subject}
              sendby={data.users && data.users[0].fullname}
              content={data.inbox && msg.inbox[0].messageText}
              date={data.inbox && msg.inbox[0].createdAt}
            />
          )) */}


          <Msg
            title={data.inbox && data.inbox[0].subject}
            sendby={data.users && data.users[0].fullname}
            content={data.inbox && data.inbox[0].messageText}
            date={data.inbox && data.inbox[0].createdAt}
          />
        </div>
      </div>
    );
  }
}

export default Messages;
