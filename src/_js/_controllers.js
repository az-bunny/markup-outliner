const container = document.getElementById('mo');
const showOutlineState = {
  div: false,
}
const divOutlineID = 'mo-show-outline-div';

// add controllers dom
{
  const functionsContainer = document.createElement('div');
  const functionsHTML =
    '<ul>' +
      '<li>' +
        'div outline: ' +
        `<button id="${divOutlineID}"></button>` +
      '</li>' +
    '</ul>';
  functionsContainer.id = 'functions-container';
  functionsContainer.insertAdjacentHTML('afterbegin', functionsHTML);
  document.body.insertAdjacentElement('afterbegin', functionsContainer);
}

const toggleDivOutline = document.getElementById(divOutlineID);

// toggle div outline
{
  updateDivOutline();

  toggleDivOutline.addEventListener('click', () => {
    showOutlineState.div = !showOutlineState.div;
    updateDivOutline();
  });
}

function updateDivOutline() {
  const className = 'show-div';
  const labels = {
    show: '✔ show',
    hide: '✘ hide',
  }

  if(showOutlineState.div) {
    toggleDivOutline.innerHTML = labels.hide;
    container.classList.add(className);
  } else {
    toggleDivOutline.innerHTML = labels.show;
    container.classList.remove(className);
  }
}