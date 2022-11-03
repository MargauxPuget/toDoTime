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
        <input type="text" className="form_item" placeholder="Ajouter une tâche" value={value} onChange={handleChange} />
        <input type="time" className="form_item" />
        <button type="button" onClick={handleSubmit} className="form_button">Création</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  value: PropTypes.string.isRequired,
  changeLabel: PropTypes.func.isRequired,
};

export default Form;
