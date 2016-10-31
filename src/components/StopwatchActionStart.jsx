import React, {PropTypes, Component} from 'react';

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
      time: laps.reduce((p, v) => p < v ? p : v, currentValue)
    });
  }

  render () {
    const {
      stopwatchStop,
      laptime,
      lapIndex
    } = this.props;

    return (
      <div className="stopwatch-buttons">
        <button
          className="action-button green action-button-margin"
          onClick={() => this.addLap(laptime)}
        >
          КРУГ
        </button>
        <button
          className="action-button red action-button-margin"
          onClick={() => stopwatchStop({index: lapIndex})}
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
