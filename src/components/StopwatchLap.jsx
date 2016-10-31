import React, {PropTypes, Component} from 'react';
import FormatedTime from './FormatedTime';

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
        className={lap === bestTime ? 'lap besttime' : 'lap justlap'}
        onClick={() => setStopwatchBestTime({index: index, time: lap})}
        title="Кликни, чтобы установить лучшее время"
      >
        <span>{lapNumber}. <FormatedTime time={lap}/></span>
        <span className="timeline">
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
