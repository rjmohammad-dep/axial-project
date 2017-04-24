const path = require('path')

module.exports = {
  context: __dirname,
  entry: ['whatwg-fetch', './src/app.js'],
  output: {
    path: path.join(__dirname, '/src/'),
    publicPath: '/src/',
    filename: 'bundle.js'
  },
  devtool: '#eval-source-map',
  devServer: {
    publicPath: '/src/',
    open: true,
    historyApiFallback: true,
    contentBase: './src'
  },
  resolve: {
    extensions: ['.js', '.css']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }],
      },
       {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      
    ]
  }
}
