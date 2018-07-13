import 'dotenv-extended/config';
import { join } from 'path';
import { HotModuleReplacementPlugin, DefinePlugin, ContextReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { version } from './package.json';

const { PORT } = process.env;

export default {
  context: join(__dirname, 'client'),
  entry: {
    main: './app/app.js'
  },
  output: {
    path: './dist/client',
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'ng-annotate?regexp=^_angular2\\.default\\.module\\(.*\\)$!babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|woff2?|ttf)(\?.*)?$/i,
        loader: 'file'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.ejs',
      inject: 'body'
    }),
    new DefinePlugin({
      __VERSION__: JSON.stringify(version)
    }),
    new HotModuleReplacementPlugin(),
    new ContextReplacementPlugin(/moment[\\]locale$/, /en/)
  ],
  devServer: {
    port: 9393,
    hot: true,
    inline: true,
    contentBase: './client',
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: `http://localhost:${PORT}`
      },
      '/ws/*': {
        target: `http://localhost:${PORT}`
      }
    }
  }
};
