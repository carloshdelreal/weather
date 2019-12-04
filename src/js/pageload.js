import { createDiv } from './elmcreator';
import createForm from './forms';
import weatherCard from './weatherCard';
// import domListeners from './domListeners';

export default function load() {
  // Content
  const content = document.querySelector('#content');
  const column = createDiv(['col-md-8']);
  const form = createForm();
  const card = weatherCard();
  form.cardFields = card.cardFields;

  // append created DOM objects
  content.appendChild(column);
  column.appendChild(form.formContainer);
  column.appendChild(card.cardsContainer);

  // domListeners();
  return form;
}
