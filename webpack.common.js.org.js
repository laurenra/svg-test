const path = require('path');

module.exports = {
  entry: {
    app: './js/svg-test.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/svg-test.js',
  },
};
