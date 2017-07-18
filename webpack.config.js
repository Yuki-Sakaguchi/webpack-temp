const webpack = require('webpack');

module.exports = {
  // エントリーポイントの設定
  entry: {
    js: __dirname + '/src/app.js'
  },
  
  // 出力設定
  output: {
    // 出力先
    path: __dirname + '/public/js',

    // 出力ファイル名
    filename: 'bundle.js',
  },

  // ソースマップ
  devtool: 'source-map',

  // ミニファイ

  // 開発の場合はミニファイせず
  // 本番の場合にはミニファイしてソースマップなし
}