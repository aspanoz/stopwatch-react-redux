import React, {PropTypes, Component} from 'react';
import styles from '../styles.css';

export default class StopwatchAdd extends Component {

  addStopwatchClick () {
    const {
      setStopwatchLaps,
      addStopwatch,
      id
    } = this.props;

    addStopwatch();
    setStopwatchLaps(id);
  }

  render () {
    return (
      <button
        className={`${styles.buttonFullWidth} ${styles.buttonGreen}`}
        onClick={() => this.addStopwatchClick()}
      >
        ДОБАВИТЬ НОВЫЙ
      </button>
    );
  }
}

StopwatchAdd.propTypes = {
  id: PropTypes.number.isRequired,
  addStopwatch: PropTypes.func.isRequired,
  setStopwatchLaps: PropTypes.func.isRequired
};
