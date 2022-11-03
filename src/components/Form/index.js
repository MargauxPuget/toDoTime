// == Import
import './styles.scss';

function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Je veux ajouter une tache !!');
  }

  return (
    <div className="wrapper_form">
      <h2> Ajouter une tâche et un temps</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" className="form_item" placeholder="Ajouter une tâche" />
        <input type="time" className="form_item" />
        <button type="button" onClick={handleSubmit} className="form_button">Création</button>
      </form>
    </div>
  );
}

export default Form;
