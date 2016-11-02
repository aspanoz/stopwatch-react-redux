import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';
import FormatedTime from './FormatedTime';
import styles from '../styles.css';

export default class Stopwatch extends Component {

  deleteStopwatchAndLaps (id) {
    const {
      deleteStopwatch,
      deleteStopwatchLaps
    } = this.props;

    deleteStopwatch(id);
    deleteStopwatchLaps(id);
  }

  isRenderBestLap (time) {
    return (time !== 0 && time !== undefined)
      ? (<FormatedTime time={time}/>)
      : null;
  }

  render () {
    const stopwatch = this.props.stopwatch;

    return (
      <div className={styles.stopwatch}>
        <Link className={styles.stopwatchInfo} to={`/stopwatch/${stopwatch.id}`}>
          <div className={styles.stopwatchInfoTitle}>{stopwatch.title}</div>
          <div className={styles.stopwatchInfoLap}>{this.isRenderBestLap(stopwatch.time)}</div>
        </Link>
        <button
          className={`${styles.buttonSmall} ${styles.buttonRed}`}
          onClick={() => this.deleteStopwatchAndLaps(stopwatch.id)}
        >
          УДАЛИТЬ
        </button>
      </div>
    );
  }
}

Stopwatch.propTypes = {
  deleteStopwatch: PropTypes.func.isRequired,
  deleteStopwatchLaps: PropTypes.func.isRequired,
  stopwatch: PropTypes.object.isRequired
};
