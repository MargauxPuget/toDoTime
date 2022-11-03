// == Import
import PropTypes from 'prop-types';

import './styles.scss';

function Counter({ list }) {
  // on veut le nombre de taches fini et à faire
  const tasksDoneList = list.filter((item) => item.done);
  const tasksNotDoneList = list.filter((item) => !item.done);
  // on compte le nombre de lignes du tableau filtré
  const nbrDoneTask = tasksDoneList.length;
  const nbrNotDoneTask = tasksNotDoneList.length;

  return (
    <div className="wrapper_couter">
      <p className="counter">{nbrNotDoneTask} tâches en attentes</p>
      <p className="counter">{nbrDoneTask} tâches finies</p>
    </div>/* wrapper_couter */
  );
}

Counter.propTypes = {
  list: PropTypes.arrayOf().isRequired,
};

export default Counter;
