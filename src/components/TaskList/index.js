// == Import
import PropTypes from 'prop-types';

import './styles.scss';
import Task from 'src/components/TaskList/Task';

function TaskList({ list }) {
  const arrayOfJSXelements = list.map((item) => <Task />);

  return (
    <ul className="wrapper_list">
      { arrayOfJSXelements }
    </ul>
  );
}

TaskList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  })).isRequired,
};

export default TaskList;
