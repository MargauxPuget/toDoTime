import PropTypes from 'prop-types';
import { memo } from 'react';

function Task({
  id,
  label,
  time,
  timer,
  interval,
  description,
  done,
  taskWIP,
  changeTaskWIP,
  changeTaskDone,
  changeTaskTimer,
  changeTaskInterval,
}) {
  // traduction du time en seconde -> en heures, minutes et secondes.
  const heures = Math.trunc(time / 3600);
  const minutes = Math.trunc((time - (heures * 3600)) / 60);
  const secondes = Math.trunc(time % 60);
  const timerHeures = Math.trunc(timer / 3600);
  const timerMinutes = Math.trunc((timer - (timerHeures * 3600)) / 60);
  const timerSecondes = Math.trunc(timer % 60);

  function chronoEnd() {
    changeTaskDone(id);
    changeTaskInterval(id, -1);
  }

  function chrono() {
    if (timer === 0) {
      chronoEnd();
      clearInterval(interval);
      return;
    }

    timer -= 1;
    changeTaskTimer(id, timer);
  }

  function handleClickStart() {
    // démarrage du compte a rebourre
    // seulement si il y a du temps
    if ((timer > 0) && (interval === -1)) {
      interval = setInterval(chrono, 1000);
      changeTaskInterval(id, interval);
    }

    // modification du status de la tache
    // pour affichage du timer
    changeTaskWIP(id);
  }

  function handleClickStop() {
    console.log('interval2', interval, taskWIP);
    clearInterval(interval);
    changeTaskInterval(id, -1);
    changeTaskWIP(id);
    console.log('interval2', interval, taskWIP, timer);
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
          </div>
          <span className="chrono">{ timerHeures }h, {timerMinutes}min, {timerSecondes}s</span>
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
  timer: PropTypes.number.isRequired,
  interval: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  taskWIP: PropTypes.bool.isRequired,
  changeTaskWIP: PropTypes.func.isRequired,
  changeTaskDone: PropTypes.func.isRequired,
  changeTaskTimer: PropTypes.func.isRequired,
  changeTaskInterval: PropTypes.func.isRequired,
};

export default memo(Task);
