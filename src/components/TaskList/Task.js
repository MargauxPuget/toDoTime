import PropTypes from 'prop-types';
import { memo } from 'react';

function Task({
  id,
  label,
  time,
  description,
  done,
  taskWIP,
  changeTaskWIP,
  changeTaskTime,
}) {
  // traduction du time en seconde -> en heures, minutes et secondes.
  const heures = Math.trunc(time / 3600);
  const minutes = Math.trunc((time - (heures * 3600)) / 60);
  const secondes = Math.trunc(time % 60);

  let interval;

  function chrono() {
    if (time === 0) {
      clearInterval(interval);
      return;
    }

    time -= 1;

    console.log('test', time);
    changeTaskTime(id, time);
  }

  function handleClickStart() {
    // démarrage du compte a rebourre
    // seulement si il y a du temps
    if ((time > 0) && (interval === undefined)) {
      console.log(interval);
      interval = setInterval(chrono, 1000);
      console.log(interval);
      // chrono();
    }

    // modification du status de la tache
    // pour affichage du timer
    changeTaskWIP(id);
  }

  function handleClickStop() {
    console.log (interval);
    clearInterval(interval);
  }

  return (
    <li className={done ? ' task task--done' : ' task'}>
      <h3 className="task_title">{label}</h3>
      <p className="task_time">{heures}heures<br />{minutes}minutes<br />{secondes} secondes</p>
      <p className="task_description">{description}</p>
      {!done && !taskWIP && (
        <div className="task_button">
          <span className="task_button_text" onClick={handleClickStart}>Démarrer !</span>
          <span className="line -right" />
          <span className="line -top" />
          <span className="line -left" />
          <span className="line -bottom" />
        </div>
      )}
      {!done && taskWIP && (
        <>
          <div className="box">
            <svg>
              <circle cx="50px" cy="50px" r="50px" />
              <circle cx="50px" cy="50px" r="50px" />
            </svg>
            <span className="chrono">75%</span>
          </div>
          <div className="task_button">
            <span className="task_button_text" onClick={handleClickStop}>Pause</span>
            <span className="line -right" />
            <span className="line -top" />
            <span className="line -left" />
            <span className="line -bottom" />
          </div>
        </>
      )}
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  taskWIP: PropTypes.bool.isRequired,
  changeTaskWIP: PropTypes.func.isRequired,
  changeTaskTime: PropTypes.func.isRequired,
};

export default memo(Task);
