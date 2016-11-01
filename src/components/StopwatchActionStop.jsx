import React, {PropTypes, Component} from 'react';
import styles from '../styles.css';

export default class StopwatchActionStop extends Component {

  clearStoredLaps () {
    const {
      lapIndex,
      stopwatchIndex,
      setStopwatchBestTime,
      clearStopwatchLaps
    } = this.props;

    clearStopwatchLaps(lapIndex);

    setStopwatchBestTime({
      index: stopwatchIndex,
      time: 0
    });
  }

  render () {
    const {
      lapIndex,
      stopwatchStart
    } = this.props;

    return (
      <div>
        <button
          className={`${styles.buttonSmall} ${styles.buttonRed} ${styles.buttonMargin}`}
          onClick={() => this.clearStoredLaps()}
        >
          СБРОС
        </button>
        <button
          className={`${styles.buttonSmall} ${styles.buttonGreen} ${styles.buttonMargin}`}
          onClick={() => stopwatchStart(lapIndex)}
        >
          СТАРТ
        </button>
      </div>
    );
  }
}

StopwatchActionStop.propTypes = {
  setStopwatchBestTime: PropTypes.func.isRequired,
  clearStopwatchLaps: PropTypes.func.isRequired,
  stopwatchStart: PropTypes.func.isRequired,
  lapIndex: PropTypes.number.isRequired,
  stopwatchIndex: PropTypes.number.isRequired
};
