/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
import PropTypes from 'prop-types';

import './styles.scss';

function Form({ value, changeLabel }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Je veux ajouter une tache !!');
  }

  function handleChange(event) {
    const newValue = event.target.value;
    changeLabel(newValue);
    console.log('on change la valeur à : ', newValue);
  }

  return (
    <div className="wrapper_form">
      <h2> Ajouter une tâche et un temps</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form_value">
          Nouvelle tache :
          <input type="text" name="value" placeholder="Ajouter une tâche" value={value} onChange={handleChange} />
        </label>

        <label className="form_hours">
          Heures :
          <input type="number" name="hours" />
        </label>

        <label className="form_minutes">
          Minutes :
          <input type="number" name="minutes" />
        </label>

        <button className="form_button" type="button" onClick={handleSubmit}>Création</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  value: PropTypes.string.isRequired,
  changeLabel: PropTypes.func.isRequired,
};

export default Form;
