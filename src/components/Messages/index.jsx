import React, { Component } from 'react';
import styles from './styles.css';
import Msg from './../Msg';
// This is the class that process and fetch the data in the inbox
class Messages extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }
  // This method simulate the fetching of the data from the server.
  componentDidMount() {
    const data = {
      inbox: [{
        id: 1,
        subject: 'This is a title',
        messageText: 'Some text Demasiado textoSome text Demasiado textoSome text Demasiado ',
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
      {
        id: 3,
        subject: 'This another title',
        messageText: 'Another text, testing the map',
        createdAt: '2018-05-18',
        userId: 1,
      },
      {
        id: 4,
        subject: 'This another title',
        messageText: 'Another text, testing the map',
        createdAt: '2018-05-18',
        userId: 1,
      },
      {
        id: 5,
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

          {/* Map that create the elements in inbox depending on the data fetched */}

          {data && data.inbox.map(msg => (
            <Msg
              key={msg.id}
              title={msg.subject}
              sendby={data.users[0].fullname}
              content={msg.messageText}
              date={msg.createdAt}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Messages;
