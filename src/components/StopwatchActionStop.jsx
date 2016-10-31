import React, {PropTypes, Component} from 'react';

export default class StopwatchActionStop extends Component {

  clearStoredLaps () {
    const {
      lapIndex,
      stopwatchIndex,
      setStopwatchBestTime,
      clearStopwatchLaps
    } = this.props;

    clearStopwatchLaps({
      index: lapIndex
    });

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
          className="action-button red action-button-margin"
          onClick={() => this.clearStoredLaps()}
        >
          СБРОС
        </button>
        <button
          className="action-button green action-button-margin"
          onClick={() => stopwatchStart({index: lapIndex})}
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
