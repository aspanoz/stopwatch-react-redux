import React, {PropTypes, Component} from 'react';
import FormatedTime from './FormatedTime';
import styles from '../styles.css';

export default class StopwatchLap extends Component {
  render () {
    const {
      setStopwatchBestTime,
      lap,
      bestTime,
      index,
      lapNumber,
      timeline
    } = this.props;

    return (
      <div
        className={lap === bestTime
          ? `${styles.lap} ${styles.besttime}`
          : `${styles.lap} ${styles.justlap}`
        }
        onClick={() => setStopwatchBestTime({index: index, time: lap})}
        title="Кликни, чтобы установить лучшее время"
      >
        <span>{lapNumber}. <FormatedTime time={lap}/></span>
        <span className={styles.timeline}>
          <span style={{width: `${timeline}px`}}/>
        </span>
      </div>
    );
  }
}

StopwatchLap.propTypes = {
  setStopwatchBestTime: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  bestTime: PropTypes.number.isRequired,
  timeline: PropTypes.number.isRequired,
  lap: PropTypes.number.isRequired,
  lapNumber: PropTypes.number.isRequired
};
