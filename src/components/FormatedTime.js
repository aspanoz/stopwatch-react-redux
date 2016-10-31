import React, {Component} from 'react';

class FormatedTime extends Component {
  render() {
    const time = new Date(this.props.time);
    const h = `00${time.getHours()}`.slice(-2);
    const m = `00${time.getMinutes()}`.slice(-2);
    const s = `00${time.getSeconds()}`.slice(-2);
    const ms = `000${time.getMilliseconds()}`.slice(-3);
    return (
      <span>{`${h}:${m}:${s}.${ms}`}</span>
    )
  }
}

export default FormatedTime;
