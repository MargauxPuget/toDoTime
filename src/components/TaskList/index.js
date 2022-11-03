// == Import
import PropTypes from 'prop-types';

import './styles.scss';
import Task from 'src/components/TaskList/Task';

function TaskList({ list }) {
  const arrayOfJSXelements = list.map((item) => (
    <Task
      key={item.id}
      {...item}
    />
  ));

  return (
    <ul className="wrapper_list">
      { arrayOfJSXelements }
    </ul>
  );
}

TaskList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default TaskList;
