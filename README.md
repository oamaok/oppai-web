# oppai-web

oppai-web is a web interface for [oppai](https://github.com/Francesco149/oppai) (osu! pp advanced inspector) written in Node.js.

## Installing

 - Install [Node.js](https://nodejs.org/) (tested on both 4.2.6 and 6.0.0)
 - Install [Webpack](https://webpack.github.io/) with `npm install -g webpack`
 - Clone the repository and `cd` into it
 - Compile or download the executable for [oppai](https://github.com/Francesco149/oppai) and place it in the `bin/` directory
 - Run the following commands:
```
# Install the required packages
npm install

# Build oppai.js for the client
webpack -p

# Run the server!
node .
```
 - You can now access the server at localhost:3000

For actual production use, [PM2](https://github.com/Unitech/pm2) or alternative is suggested.
For development, simply run `webpack -w` and `nodemon` in separate terminals/screens/however you like it. [Nodemon](http://nodemon.io/) can be installed with `npm install -g nodemon`.

## License

The MIT License (MIT)
Copyright &copy; 2016 teemu pääkkönen (oamaok)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.