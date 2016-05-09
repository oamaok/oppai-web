const exec = require('child_process').exec;
const Promise = require('bluebird');
const path = require('path');

module.exports = (beatmap, options) =>
{
  const EXECUTABLE_PATH = path.resolve(__dirname, '../../bin/oppai');
  options = options || {};

  return new Promise((resolve, reject) => {
    if (!Array.isArray(options.mods))
      options.mods = ['nomod'];

    const acc = (parseFloat(options.acc) || 100) + '%';
    const availMods = ['nomod', 'nf', 'ez', 'hd', 'hr', 'dt', 'ht', 'nc', 'fl', 'so'];
    const mods = (options.mods).filter(selected => availMods.some(mod => mod === selected)).join('');
    const combo = parseInt(options.combo) || '';
    const misses = parseInt(options.misses) || '';
    const scorev = 'scorev' + (parseInt(options.scorev) || '2');

    const command = [EXECUTABLE_PATH, beatmap, acc, mods.length ? '+' + mods : '', combo, misses, scorev].join(' ');
    console.log(command);
    exec(command, (error, stdout, stderr) => {
      
      if (error)
        return reject(error);

      if (stderr)
        return reject(stderr);

      resolve(stdout);
    });
    
  });
}