var path = require('path');
var webpack = require('webpack');

var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
];
var entry = ['./src/index'];
var loaders = [];

if(process.env.NODE_ENV === 'PRODUCTION'){
  loaders.push(
    {test: /\.js?$/, exclude: /node_modules/, loaders: ['babel']}
  );
}else {
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );
  entry.push(
    'webpack-dev-server/client?http://localhost:8180',
    'webpack/hot/only-dev-server'
  );
  loaders.push(
    {test: /\.js?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel']}
  );
}

module.exports = {

  entry: entry,

  output: {
    library: 'Portal',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    filename: 'Portal.js',
    publicPath: 'http://localhost:8180/dist'
  },

  externals: [
    {
      "react": {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react"
      }
    },
    {
      "lcars": {
        root: "LCARS",
        commonjs2: "lcars",
        commonjs: "lcars",
        amd: "react"
      }
    }
  ],

  module: {
    loaders: loaders
  },

  node: {
    Buffer: false
  },

  plugins: plugins

};
