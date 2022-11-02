// == Import
import './styles.scss';

function Form() {
  return (
    <div className="wrapper_form">
      <h2> Ajouter une tâche et un temps</h2>
      <form className="form">
        <input type="text" className="form_item" placeholder="Ajouter une tâche" />
        <input type="time" className="form_item" />
      </form>
    </div>
  );
}

export default Form;
