document.querySelector('#send').addEventListener('click', () => {
  const title = document.querySelector('#title-input').value;
  fetch('/api/nodes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title})
  });
});
