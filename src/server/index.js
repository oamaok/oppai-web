const express = require('express');
const path = require('path');
const oppai = require('./oppai');
const fs = require('fs');
const md5file = require('md5-file');
const multer = require('multer');
const multiparty = require('connect-multiparty')();

const app = express();

app.use('/', express.static(path.resolve(__dirname, '../../web/')));

app.post('/oppai', multiparty, (req, res) => {

  console.log(req.body);

  if (!req.files || !req.files.map)
    return res.send({error: 'invalid or no file'}).end();

  const file = req.files.map;

  if (file.name.substr(-4) !== '.osu' || file.size > 1024 * 1024 * 2)
    return res.send({error: 'invalid or no file'}).end();

  const filename = path.resolve(__dirname, '../../beatmaps/', md5file(file.path) + '.osu');

  fs.readFile(file.path, (err, data) => {
    fs.unlink(file.path);
    if (err)
      return res.send({error: err});

    fs.writeFile(filename, data, err => {
      if (err)
        return res.send({error: err});

      const mods = req.body.mods.split(',');
      const options = Object.assign(req.body, {mods});

      oppai(filename, options)
      .then(output => {
        res.send({output});
      })
      .catch(error => {
        res.send({error: 'error occured, pls no break'});
      });
    });
  });

});

app.listen(3000);
