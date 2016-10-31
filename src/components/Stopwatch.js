import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';
import FormatedTime from './FormatedTime';
import '../styles.css';

class Stopwatch extends Component {

  render() {
    const {
      stopwatch,
      delStopwatch,
      delStopwatchLaps
    } = this.props;

    return (
      <div className="stopwatch">
        <Link className="stopwatchInfo" to={`/stopwatch/${stopwatch.id}`}>
          <div className="stopwatchInfo-title">{stopwatch.title}</div>
          <div className="stopwatchInfo-lap">{(
            (stopwatch.time !== 0 && stopwatch.time !== undefined) 
            ? <FormatedTime time={stopwatch.time}/>
            : <span/>
          )}</div>
        </Link>
        <button className="action-button red" onClick={() => {
          delStopwatch(stopwatch.id);
          delStopwatchLaps(stopwatch.id);
        }}>УДАЛИТЬ</button>
      </div>
    );
  }
}

Stopwatch.propTypes = {
  delStopwatch: PropTypes.func.isRequired
};

export default Stopwatch;
