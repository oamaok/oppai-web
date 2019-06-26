const express = require('express');
const path = require('path');
const fs = require('fs');
const md5file = require('md5-file');
const multiparty = require('connect-multiparty')();
const oppai = require('./oppai');

const app = express();

app.use('/', express.static(path.resolve(__dirname, '../../build')));

app.post('/oppai', multiparty, (req, res) => {
  if (!req.files || !req.files.map) return res.send({ error: 'invalid or no file' }).end();

  const file = req.files.map;

  if (file.name.substr(-4) !== '.osu' || file.size > 1024 * 1024 * 2) {
    fs.unlink(file.path);
    return res.send({ error: 'invalid or no file' }).end();
  }

  const filename = path.resolve(__dirname, '../../beatmaps/', `${md5file(file.path)}.osu`);

  return fs.readFile(file.path, (err, data) => {
    fs.unlink(file.path);
    if (err) return res.send({ error: err });

    return fs.writeFile(filename, data, (err) => {
      if (err) return res.send({ error: err });

      const mods = req.body.mods.split(',');
      const acc = req.body.acc.replace(',', '.');
      const options = Object.assign({}, req.body, { mods, acc });

      oppai(filename, options)
        .then((output) => {
          res.send({ output });
        })
        .catch((error) => {
          res.send({ error: 'error occured, pls no break' });
        });
    });
  });
});

app.listen(3001);
