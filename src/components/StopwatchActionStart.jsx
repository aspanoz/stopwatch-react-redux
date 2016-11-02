import React, {PropTypes, Component} from 'react';
import styles from '../styles.css';

export default class StopwatchActionStart extends Component {
  addLap (lapTime) {
    const {
      addStopwatchLap,
      setStopwatchBestTime,
      lapIndex,
      stopwatchIndex,
      laps
    } = this.props;

    const currentTime = Date.now();
    const currentValue = currentTime - lapTime;

    addStopwatchLap({
      time: currentTime,
      lap: currentValue,
      index: lapIndex
    });

    setStopwatchBestTime({
      index: stopwatchIndex,
      time: currentValue
    });
  }

  render () {
    const {
      stopwatchStop,
      laptime,
      lapIndex
    } = this.props;

    return (
      <div>
        <button
          className={`${styles.buttonSmall} ${styles.buttonGreen} ${styles.buttonMargin}`}
          onClick={() => this.addLap(laptime)}
        >
          КРУГ
        </button>
        <button
          className={`${styles.buttonSmall} ${styles.buttonRed} ${styles.buttonMargin}`}
          onClick={() => stopwatchStop(lapIndex)}
        >
          СТОП
        </button>
      </div>
    );
  }
}

StopwatchActionStart.propTypes = {
  addStopwatchLap: PropTypes.func.isRequired,
  setStopwatchBestTime: PropTypes.func.isRequired,
  stopwatchStop: PropTypes.func.isRequired,
  laptime: PropTypes.number.isRequired,
  lapIndex: PropTypes.number.isRequired,
  stopwatchIndex: PropTypes.number.isRequired,
  laps: PropTypes.array.isRequired
};
