import React, {PropTypes, Component} from 'react';

export default class StopwatchAdd extends Component {

  addStopwatchClick () {
    const {
      setStopwatchLaps,
      addStopwatch,
      stopwatch
    } = this.props;

    const id = stopwatch
      .reduce((p, v) => p.id > v.id ? p.id + 1 : v.id + 1, 0);

    addStopwatch(id);
    setStopwatchLaps(id);
  }

  render () {
    return (
      <div>
        <button
          className="addStopwatch green"
          onClick={() => this.addStopwatchClick()}
        >
          ДОБАВИТЬ НОВЫЙ
        </button>
      </div>
    );
  }
}

StopwatchAdd.propTypes = {
  stopwatch: PropTypes.array.isRequired,
  addStopwatch: PropTypes.func.isRequired,
  setStopwatchLaps: PropTypes.func.isRequired
};
