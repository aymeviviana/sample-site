document.addEventListener('DOMContentLoaded', (event) => {
  const h1 = document.querySelector('h1');

  h1.addEventListener('click', (event) => {
    alert(`Clicked ${event.target.tagName}`);
  });
});
