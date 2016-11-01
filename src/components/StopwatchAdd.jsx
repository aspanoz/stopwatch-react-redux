import React, {PropTypes, Component} from 'react';
import styles from '../styles.css';

export default class StopwatchAdd extends Component {

  addStopwatchClick () {
    const {
      setStopwatchLaps,
      addStopwatch,
      stopwatch
    } = this.props;

    const id = stopwatch
      .reduce((p, v) => p.id > v.id ? p.id + 1 : v.id + 1, 0);

    addStopwatch(id);
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
  stopwatch: PropTypes.array.isRequired,
  addStopwatch: PropTypes.func.isRequired,
  setStopwatchLaps: PropTypes.func.isRequired
};
