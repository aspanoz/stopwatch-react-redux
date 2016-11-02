import React, {PropTypes, Component} from 'react';
import FormatedTime from './FormatedTime';
import styles from '../styles.css';

export default class StopwatchLap extends Component {
  render () {
    const {
      manualSetStopwatchBestTime,
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
        onClick={() => manualSetStopwatchBestTime({index: index, time: lap})}
        title="Кликни, чтобы установить лучшее время"
      >
        <span>{lapNumber}. <FormatedTime time={lap}/></span>
        <span className={styles.timeline}>
          <span style={{width: `calc((100% - 160px) * ${timeline})`}}/>
        </span>
      </div>
    );
  }
}

StopwatchLap.propTypes = {
  manualSetStopwatchBestTime: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  bestTime: PropTypes.number.isRequired,
  timeline: PropTypes.number.isRequired,
  lap: PropTypes.number.isRequired,
  lapNumber: PropTypes.number.isRequired
};
