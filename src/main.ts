import './sass/grid.scss';

const toggleGridButton = document.getElementById('toggle-grid') as HTMLElement;
const toggleBreakpointsButton = document.getElementById(
  'toggle-breakpoints'
) as HTMLElement;

toggleGridButton.addEventListener('click', () => {
  document.body.classList.toggle('bv8-debug-grid');
  toggleGridButton.setAttribute(
    'data-view',
    toggleGridButton.getAttribute('data-view') === 'show' ? 'hide' : 'show'
  );
});
toggleBreakpointsButton.addEventListener('click', () => {
  document.body.classList.toggle('bv8-debug-breakpoints');
  toggleBreakpointsButton.setAttribute(
    'data-view',
    toggleBreakpointsButton.getAttribute('data-view') === 'show'
      ? 'hide'
      : 'show'
  );
});
