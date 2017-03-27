var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './prelive_protected/main.js',
  output: {
    path: path.resolve(__dirname, './prelive'),
    publicPath: '/prelive',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
      },
      {
          test: /\.less$/,
          loaders: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]?[hash]',
          publicPath: '/'
        }
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]?[hash]',
          publicPath: '/'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'jquery-ui': 'jquery-ui-dist/jquery-ui.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    contentBase: './prelive'
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

module.exports.plugins = [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
];

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
  ])
}
