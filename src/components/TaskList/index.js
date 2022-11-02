// == Import
import './styles.scss';

function TaskList() {
  return (
    <ul className="wrapper_list">
      <li className="cardItem">
        <h3>Sortir marcher</h3>
        <p>en 33 minutes et 15 secondes</p>
        bar de progression (pê en forme d'horloge :  {/* TODO :  video a voir 'https://www.youtube.com/watch?v=MdKvSJOWm_U' */})
      </li>
      <li className="cardItem">
        <h3>Coder !!!</h3>
        <p>en 33 minutes et 15 secondes</p>
        bar de progression (pê en forme d'horloge)
      </li>
      <li className="cardItem">
        <h3>Payer Nounou</h3>
        <p>en 33 minutes et 15 secondes</p>
        bar de progression (pê en forme d'horloge)
      </li>
      <li className="cardItem">
        <h3>Prévoir un retso</h3>
        <p>en 33 minutes et 15 secondes</p>
        <p>Toutes les 2 semaines</p>
        bar de progression (pê en forme d'horloge)
      </li>
    </ul>
  );
}

export default TaskList;
