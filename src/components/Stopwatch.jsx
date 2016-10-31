import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';
import FormatedTime from './FormatedTime';
import '../styles.css';

export default class Stopwatch extends Component {

  deleteStopwatchAndLaps (id) {
    const {
      delStopwatch,
      delStopwatchLaps
    } = this.props;

    delStopwatch(id);
    delStopwatchLaps(id);
  }

  isRenderBestLap (time) {
    return (time !== 0 && time !== undefined)
      ? (<FormatedTime time={time}/>)
      : null;
  }

  render () {
    const stopwatch = this.props.stopwatch;

    return (
      <div className="stopwatch">
        <Link className="stopwatchInfo" to={`/stopwatch/${stopwatch.id}`}>
          <div className="stopwatchInfo-title">{stopwatch.title}</div>
          <div className="stopwatchInfo-lap">{this.isRenderBestLap(stopwatch.time)}</div>
        </Link>
        <button
          className="action-button red"
          onClick={() => this.deleteStopwatchAndLaps(stopwatch.id)}
        >
          УДАЛИТЬ
        </button>
      </div>
    );
  }
}

Stopwatch.propTypes = {
  delStopwatch: PropTypes.func.isRequired,
  delStopwatchLaps: PropTypes.func.isRequired,
  stopwatch: PropTypes.object.isRequired
};
