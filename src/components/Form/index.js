/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
import PropTypes from 'prop-types';

import './styles.scss';

function Form({
  label,
  hours,
  minutes,
  changeLabel,
  changeHours,
  changeMinutes,
  addNewTask,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    addNewTask();
  }

  function handleChangeLabel(event) {
    const newValue = event.target.value;
    changeLabel(newValue);
    // console.log('on change la valeur du label : ', newValue);
  }

  function handleChangeHours(event) {
    const newValue = event.target.value;
    changeHours(newValue);
    // console.log('on change la valeur à des heures: ', newValue);
  }

  function handleChangeMinutes(event) {
    const newValue = event.target.value;
    changeMinutes(newValue);
    // console.log('on change la valeur à des minutes: ', newValue);
  }

  return (
    <div className="wrapper_form">
      <h2> Ajouter une tâche et un temps</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form_value">
          Nouvelle tache :
          <input type="text" name="value" placeholder="Ajouter une tâche" value={label} onChange={handleChangeLabel} />
        </label>

        <label className="form_hours">
          Heures :
          <input type="number" name="hours" value={hours} onChange={handleChangeHours} />
        </label>

        <label className="form_minutes">
          Minutes :
          <input type="number" name="minutes" value={minutes} onChange={handleChangeMinutes} />
        </label>

        <button className="form_button" type="button" onClick={handleSubmit}>Création</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  label: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired, // le nombre doit etre coverti en string car l'éditeur attend un string
  minutes: PropTypes.string.isRequired, // le nombre doit etre coverti en string car l'éditeur attend un string
  changeLabel: PropTypes.func.isRequired,
  changeHours: PropTypes.func.isRequired,
  changeMinutes: PropTypes.func.isRequired,
  addNewTask: PropTypes.func.isRequired,
};

export default Form;
