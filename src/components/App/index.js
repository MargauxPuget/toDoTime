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
    this.addNewTask = this.addNewTask.bind(this);
  }

  addNewTask() {
    // console.log('Je veux ajouter une tache MAINTENANT ! ');

    //  on recupèrer les informations de la tache à ajouter dans le state
    //  pour ça on utilise du destructuring
    const {
      newTaskLabel,
      newTaskHours,
      newTaskMinutes,
      taskList,
    } = this.state;

    // on veut generer un id qui soit le plus grand existant + 1
    // trouver quel est l'id le plus grand dans taskList
    // lui ajouter un
    // on pourrait utilise Math.max qui renvoie le plus grand des nombre qu'on passe
    //  on va transformer notre tableau d'objets en tableau d'id
    const idList = taskList.map((item) => item.id);
    const maxId = Math.max(...idList);
    const newId = maxId + 1;
    // en une seule ligne :
    // const newId = Math.max(...taskList.map((item) => item.id)) + 1;

    const newTask = {
      id: newId,
      label: newTaskLabel,
      // on transforme les heurs et les minutes en secondes
      time: (newTaskHours * 3600) + (newTaskMinutes * 60),
      // todo : il faudra un jour pensée à ajouter un text area pour une description potentielle
      description: '',
      done: false,
    };

    // recuperer la liste existante dans le state et ajouter ce nouvel objet task
    taskList.push(newTask);

    // faire un setState avec cette liste des taches mise à jour
    this.setState({
      taskList: taskList,
    });
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
          addNewTask={this.addNewTask}
        />
        <Counter list={taskList} />
        <TaskList list={taskList} />
      </div>
    );
  }
}

// == Export
export default App;
