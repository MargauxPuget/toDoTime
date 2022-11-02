// == Import
import './styles.scss';
import Task from 'src/components/TaskList/Task';

function TaskList() {
  return (
    <ul className="wrapper_list">
      <Task />
      <Task />
      <Task />
      <Task />
    </ul>
  );
}

export default TaskList;
