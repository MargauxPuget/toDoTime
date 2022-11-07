// == Import
import PropTypes from 'prop-types';

import './styles.scss';
import Task from 'src/components/TaskList/Task';

function TaskList({ list, changeTaskWIP, changeTaskTime }) {
  const arrayOfJSXelements = list.map((item) => (
    <Task
      key={item.id}
      {...item}
      changeTaskWIP={changeTaskWIP}
      changeTaskTime={changeTaskTime}
    />
  ));
  const listTryForId = arrayOfJSXelements.sort((a, b) => (a.key - b.key));

  return (
    <ul className="wrapper_list">
      { listTryForId }
    </ul>
  );
}

TaskList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  changeTaskWIP: PropTypes.func.isRequired,
  changeTaskTime: PropTypes.func.isRequired,
};

export default TaskList;
