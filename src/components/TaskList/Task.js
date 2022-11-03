import PropTypes from 'prop-types';
import React from 'react';

function Task({
  label,
  time,
  description,
  done,
}) {
  // traduction du time en seconde -> en heures, minutes et secondes.
  const heures = Math.trunc(time / 3600);
  const minutes = Math.trunc((time - (heures * 3600)) / 60);
  const secondes = Math.trunc(time % 60);

  // console.log('le composant est rendu !');

  return (
    <li className={done ? ' task task--done' : ' task'}>
      <h3 className="task_title">{label}</h3>
      <p className="task_time">{heures}heures<br />{minutes}minutes<br />{secondes} secondes</p>
      <p className="task_description">{description}</p>
      {!done
      && (
        <div className="task_button">
          <span className="task_button_text">Démarrer !</span>
          <span className="line -right" />
          <span className="line -top" />
          <span className="line -left" />
          <span className="line -bottom" />

        </div>
      )}
    </li>
  );
}

Task.propTypes = {
  label: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

export default React.memo(Task);
