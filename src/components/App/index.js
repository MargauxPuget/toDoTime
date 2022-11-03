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
      newTaskLabel: 'tt',
    };

    this.changeLabel = this.changeLabel.bind(this);
  }

  changeLabel(newValue) {
    this.setState({
      newTaskLabel: newValue,
    });
  }

  render() {
    const { taskList, newTaskLabel } = this.state;

    return (
      <div className="app">
        <Form value={newTaskLabel} changeLabel={this.changeLabel} />
        <Counter list={taskList} />
        <TaskList list={taskList} />
      </div>
    );
  }
}

// == Export
export default App;
