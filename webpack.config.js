const path = require('path');

module.exports = {
  entry: './src/main.ts', // Main entry file of your Angular app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),  // Serve files from the dist directory
    },
    port: 4200,  // You can change the port here
    open: true,   // Automatically open the browser when the server starts
    hot: true,    // Enable hot reloading
  },
};