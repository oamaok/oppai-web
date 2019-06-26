const { exec } = require('child_process');
const path = require('path');

module.exports = (beatmap, _options = {}) => {
  const options = { ..._options };
  const EXECUTABLE_PATH = path.resolve(__dirname, '../../bin/oppai');

  return new Promise((resolve, reject) => {
    if (!Array.isArray(options.mods)) options.mods = ['nomod'];

    const acc = `${parseFloat(options.acc) || 100}%`;
    const availMods = ['nomod', 'nf', 'ez', 'hd', 'hr', 'dt', 'ht', 'nc', 'fl', 'so'];
    const mods = (options.mods).filter(selected => availMods.some(mod => mod === selected)).join('');
    const combo = parseInt(options.combo, 10) || '';
    const misses = parseInt(options.misses, 10) || '';
    const scorev = `scorev${parseInt(options.scorev, 10) || '1'}`;

    const command = [EXECUTABLE_PATH, beatmap, acc, mods.length ? `+${mods}` : '', combo ? `${combo}x` : '', misses ? `${misses}m` : ''].join(' ');

    exec(command, (error, stdout, stderr) => {
      if (error) return reject(error);

      if (stderr) return reject(stderr);

      return resolve(stdout);
    });
  });
};
