module.exports = {
  // エントリーポイントの設定
  entry: {
    js: __dirname + '/src/app.js'
  },
  // 出力設定
  output: {
    // 出力ファイル名
    filename: 'bundle.js',
    // 出力先
    path: __dirname + '/public/js'
  }
}