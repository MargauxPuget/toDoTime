// == Import
import React from 'react';

import './styles.css';
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import TaskList from 'src/components/TaskList';

import dataTasksList from 'src/data/tasks';

// == Composant
class App extends React.Component {
  constructor(props) {
    super(props);
    // le state du component app
    this.state = {
      taskList: dataTasksList,
      newTaskLabel: '',
      newTaskHours: '',
      newTaskMinutes: '',
    };

    this.changeLabel = this.changeLabel.bind(this);
    this.changeHours = this.changeHours.bind(this);
    this.changeMinutes = this.changeMinutes.bind(this);
  }

  changeLabel(newValue) {
    this.setState({
      newTaskLabel: newValue,
    });
  }

  changeHours(newValue) {
    this.setState({
      newTaskHours: newValue,
    });
  }

  changeMinutes(newValue) {
    this.setState({
      newTaskMinutes: newValue,
    });
  }

  render() {
    const {
      taskList,
      newTaskLabel,
      newTaskHours,
      newTaskMinutes,
    } = this.state;

    return (
      <div className="app">
        <Form
          label={newTaskLabel}
          hours={newTaskHours}
          minutes={newTaskMinutes}
          changeLabel={this.changeLabel}
          changeHours={this.changeHours}
          changeMinutes={this.changeMinutes}
        />
        <Counter list={taskList} />
        <TaskList list={taskList} />
      </div>
    );
  }
}

// == Export
export default App;
