// == Import
import './styles.css';
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import TaskList from 'src/components/TaskList';

import dataTasksList from 'src/data/tasks';

// == Composant
function App() {
  return (
    <div className="app">
      <Form />
      <Counter />
      <TaskList list={dataTasksList} />

    </div>
  );
}

// == Export
export default App;
