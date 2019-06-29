const file = document.getElementById('map');
const form = document.getElementById('oppai');
const output = document.getElementById('output');
const mods = ['nf', 'ez', 'hd', 'hr', 'dt', 'ht', 'fl', 'so'];

const modInputs = mods.map(mod => document.getElementById(`mod-${mod}`));

const overrideToggle = document.getElementById('override-toggle');
const overrideSettings = document.querySelector('.override-settings');
const arOverride = document.getElementById('ar-override');
const odOverride = document.getElementById('od-override');
const csOverride = document.getElementById('cs-override');
const arValue = document.getElementById('ar-value');
const odValue = document.getElementById('od-value');
const csValue = document.getElementById('cs-value');

overrideToggle.addEventListener('change', (evt) => {
  const { checked } = evt.target;
  overrideSettings.classList.toggle('enabled', checked);
  arOverride.disabled = !checked;
  odOverride.disabled = !checked;
  csOverride.disabled = !checked;
});

arOverride.addEventListener('input', (evt) => {
  arValue.innerText = evt.target.value;
});
odOverride.addEventListener('input', (evt) => {
  odValue.innerText = evt.target.value;
});
csOverride.addEventListener('input', (evt) => {
  csValue.innerText = evt.target.value;
});

file.addEventListener('change', (evt) => {
  document.getElementById('filename').innerText = file.value.replace(/\\/g, '/').replace(/.*\//, '');
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  output.innerHTML = '<div class="loading"></div>';
  const body = new FormData(form);
  body.append('mods', [...modInputs].filter(node => node.checked).map(node => node.id.substr(-2)));

  if (overrideToggle.checked) {
    body.append('ar', arOverride.value);
    body.append('od', odOverride.value);
    body.append('cs', csOverride.value);
  }

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
