const file = document.getElementById('map');
const form = document.getElementById('oppai');
const output = document.getElementById('output');
const mods = ['nf', 'ez', 'hd', 'hr', 'dt', 'ht', 'fl', 'so'];

const modInputs = mods.map(mod => document.getElementById(`mod-${mod}`));

file.addEventListener('change', (evt) => {
  document.getElementById('filename').innerText = file.value.replace(/\\/g, '/').replace(/.*\//, '');
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  output.innerHTML = '<div class="loading"></div>';
  const body = new FormData(form);
  body.append('mods', [...modInputs].filter(node => node.checked).map(node => node.id.substr(-2)));

  fetch('/oppai', {
    method: 'post',
    body,
  })
    .then(res => res.json())
    .then((res) => {
      if (res.error) {
        output.innerText = res.error;
        return;
      }

      output.innerText = res.output.split('\n').slice(-16).join('\n').trim();
    })
    .catch((error) => {
      output.innerText = res.error;
    });
});
