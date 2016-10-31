import React, {Component} from 'react';

window.id = 0;
class StopwatchAdd extends Component {

  addStopwatchClick() {
    const stopwatchId = window.id++;
    const titleElement = document.getElementById('title');

    const {
      setStopwatchLaps,
      addStopwatch
    } = this.props;

    const ru = "АБВГДЕЁЖЗИКЛМНОПРСТУФХЦЧЩЫЭЮЯ";
    const radix = "0123456789abcdefghijklmnopqrs";
    const name = stopwatchId
      .toString(29)
      .split("")
      .map((e) => ru.charAt(radix.indexOf(e)))
      .join("");

    addStopwatch({
      title: titleElement.value !== '' ?  titleElement.value : `Забег ${name}`,
      id: stopwatchId
    });

    setStopwatchLaps(stopwatchId);

    titleElement.value = "";
    titleElement.focus();
  }

  componentDidMount() {
    document.getElementById('title').focus();
  }

  render() {
    return (
      <div>
        <input id="title" type="text" placeholder="Название забега" />
        <button
          className="addStopwatch green"
          onClick={() => this.addStopwatchClick()}
        >ДОБАВИТЬ НОВЫЙ</button>
      </div>
    );
  }
}

export default StopwatchAdd;
