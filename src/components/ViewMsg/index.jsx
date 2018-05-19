import React, { Component } from 'react';

import styles from './styles.css';

// This component allows display the whole message that the
// user select in the inbox.

class ViewMsg extends Component {
  constructor() {
    super();
    this.handleViewIn = this.handleViewIn.bind(this);
    this.detailMessage = this.detailMessage.bind(this);
    this.feedBackMessage = this.feedBackMessage.bind(this);
    this.state = {
      display: false,
    };
  }

  // Method that handle the state of the data displayed
  handleViewIn() {
    const display = !this.state.display;
    this.setState({ display });
    console.log('Estado de la vista:', this.state.display);
  }

  // Methods that render specific elements
  detailMessage() {
    const element = (
      <div className={styles.infoncontent}>
        <div className={styles.headermsg}>
          <span className={styles.title}>Titulo</span>
          <span className={styles.date}>2018-05-18</span>
        </div>
        <span className={styles.sendby}>Jhon Doe</span>
        <span className={styles.contentmsg}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ligula risus. Nullam sem leo, posuere id turpis quis, mollis venenatis sem. Morbi tellus orci, tincidunt id leo ac, fermentum vehicula ligula. Vestibulum nec sagittis nibh, eu vestibulum dolor. Vivamus finibus maximus feugiat. Donec mattis in tortor nec pulvinar. In gravida tellus vitae pellentesque lobortis. Ut tincidunt sapien at maximus varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut non urna tortor. Nullam efficitur mattis ultrices.</span>
      </div>
    );
    return element;
  }

  feedBackMessage() {
    const element = (
      <div className={styles.feedbackview}> <span className={styles.emptystate}>Slecciona un mensaje para leerlo</span>
        <span className={styles.instruction} >Haz clic aquí para seleccionar el primer elemento de la lista</span>
      </div>
    );
    return element;
  }

  render() {
    const display = this.state.display;
    return (

      <div className={styles.root} onClick={this.handleViewIn}>
        {/* Conditional rendering that display elements depending of the boolena */}
        {this.state.display ? this.detailMessage() : this.feedBackMessage()}
      </div>
    );
  }
}

export default ViewMsg;
