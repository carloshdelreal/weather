import { createDiv } from './elmcreator';
import createForm from './forms';
// import domListeners from './domListeners';

export default function load() {
  // Content
  const content = document.querySelector('#content');
  const column = createDiv(['col-md-8']);
  // const weatherContainer = createDiv(['list']);

  // append created DOM objects
  content.appendChild(column);
  column.appendChild(createForm());

  // domListeners();

  return content;
}
