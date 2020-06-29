const path = require('path');
const PROD = process.env.NODE_ENV === 'production';

module.exports = {
  mode: PROD ? 'production' : 'development',
  entry: {
    main: path.join(__dirname, 'js/src/main.js'),
  },
  output: {
    path: path.join(__dirname, 'js/dist/'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'js/src/')],
        exclude: [path.resolve(__dirname, 'node_modules/'), path.resolve(__dirname, 'js/src/dist/')],
      },
    ],
  },
  devtool: PROD ? 'source-map' : 'inline-cheap-source-map',
};
