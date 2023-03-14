import onChange from 'on-change';

export default function handleDropdowns() {
  const state = {
    dropdowns: {},
  }

  const watchedState = onChange(state, (path, curr, prev) => {
    if(!prev) {
      curr.tab.classList.add('active');
      curr.button.classList.add('active');
    }

    if(!curr) {
      prev.tab.classList.remove('active');
      prev.button.classList.remove('active');
    }
  })

  const dropdowns = document.querySelectorAll('[data-role="dropdown"]');

  function toggleDropdown(evt) {
    const id = evt.currentTarget.dataset.dropdownLabel;
    const activeTabElement = document.querySelector(`#${id}`);

    if(state.dropdowns[id]) {
      delete watchedState.dropdowns[id];
    } else {
      watchedState.dropdowns[id] = { tab: activeTabElement, button: evt.currentTarget };
    }
  }

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', toggleDropdown);
  })
}
